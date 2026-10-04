import os
import zipfile
import io
from PIL import Image, ImageOps

# Mapping: original media filename -> destination filename in assets/img/
IMAGE_MAP = {
    "image1.jpeg": "K01_nachher.jpg",
    "image2.jpeg": "K02_nachher.jpg",
    "image3.jpeg": "K03_vorher.jpg",
    "image4.jpeg": "K03_nachher-1.jpg",
    "image5.jpeg": "K03_nachher-2.jpg",
    "image6.jpeg": "K04_vorher.jpg",
    "image7.jpeg": "K04_nachher.jpg",
    "image8.jpeg": "K05_nachher.jpg",
    "image9.jpeg": "K06_nachher.jpg",
    "image10.jpeg": "K07_nachher.jpg",
    "image11.jpeg": "K08_nachher.jpg",
    "image12.jpeg": "K09_nachher.jpg",
    "image13.jpeg": "K10_nachher.jpg",
    "image14.jpeg": "K11_NaOH.jpg",
    "image15.jpeg": "K11_H2O2.jpg",
    "image16.jpeg": "K12_nachher.jpg",
    "image17.jpeg": "K13_OF.jpg",
    "image18.jpeg": "K13_RF.jpg",
    "image19.jpeg": "K14_nachher.jpg",
    "image20.jpeg": "K15_vorher.jpg",
    "image21.jpeg": "K15_nachher.jpg",
    "image22.jpeg": "K16_OF.jpg",
    "image23.jpeg": "K16_RF.jpg",
    "image24.jpeg": "K17_nachher.jpg",
    "image25.jpeg": "K18_OF.jpg",
    "image26.jpeg": "K18_RF.jpg",
    "image27.jpeg": "K19_nachher-1.jpg",
    "image28.jpeg": "K19_nachher-2.jpg",
    "image29.jpeg": "K20_nachher.jpg",
    "image30.jpeg": "K21_nachher.jpg",
    "image31.png":  "K22_nachher.jpg",
    "image32.jpeg": "K23_nachher.jpg",
    "image33.jpeg": "K24_vorher.jpg",
    "image34.jpeg": "K24_nachher.jpg",
    "image35.jpg":  "K25_nachher.jpg",
    "image36.jpg":  "K26_vorher.jpg",
    "image37.jpg":  "K26_nachher.jpg",
    "image38.jpg":  "K27_nachher.jpg",
    "image39.jpg":  "K28_OF.jpg",
    "image40.jpg":  "K28_RF.jpg",
    "image41.jpg":  "K29_nachher.jpg",
    # K30: kein Bild
    "image42.jpg":  "K31_nachher.jpg",
    "image43.jpg":  "K32_nachher.jpg",
    "image44.jpg":  "K33_nachher.jpg",
    "image45.jpg":  "A01_nachher.jpg",
    "image46.jpg":  "AG_vergleich.jpg",
    "image47.png":  "A02_nachher.jpg",
    "image48.jpg":  "A03_nachher.jpg",
    "image49.png":  "A04_nachher-1.jpg",
    "image50.png":  "A04_nachher-2.jpg",
    "image51.jpg":  "A05_nachher.jpg",
    "image52.jpg":  "A06_nachher.jpg",
    "image53.jpg":  "A07_nachher.jpg",
    "image54.jpg":  "A08_nachher.jpg",
    "image55.jpg":  "A09_nachher.jpg",
    "image56.jpg":  "A10_nachher.jpg",
    "image57.jpg":  "A11_nachher.jpg",
    "image58.jpg":  "A12_nachher.jpg",
    "image59.jpg":  "A13_nachher.jpg",
    "image60.jpg":  "A14_nachher.jpg",
    # A15: kein Bild
}

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    app_root = os.path.dirname(script_dir)
    out_dir = os.path.join(app_root, "assets", "img")
    os.makedirs(out_dir, exist_ok=True)

    # Find the docx file
    docx_candidates = [
        os.path.join(app_root, "..", "ChemieApps", "Ionennachweise", "IonennachweiseKI.docx"),
        os.path.join(app_root, "scratch", "docx"), # or zip
    ]
    docx_path = None
    for c in docx_candidates:
        if os.path.exists(c):
            docx_path = c
            break

    if not docx_path:
        raise FileNotFoundError("Konnte IonennachweiseKI.docx nicht finden.")

    print(f"Lese Quelldatei: {docx_path}")
    zf = zipfile.ZipFile(docx_path, 'r')

    saved_count = 0
    total_bytes = 0

    for orig_name, target_name in IMAGE_MAP.items():
        zip_key = f"word/media/{orig_name}"
        if zip_key not in zf.namelist():
            print(f"WARNUNG: {zip_key} nicht im docx gefunden!")
            continue

        raw = zf.read(zip_key)
        img = Image.open(io.BytesIO(raw))
        # Handle EXIF rotation
        img = ImageOps.exif_transpose(img)
        # Convert RGBA/P to RGB for JPEG saving
        if img.mode in ("RGBA", "P"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode == "RGBA":
                bg.paste(img, mask=img.split()[3])
            else:
                bg.paste(img.convert("RGB"))
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # Resize to max 1600px edge
        max_edge = 1600
        w, h = img.size
        if max(w, h) > max_edge:
            if w > h:
                new_w = max_edge
                new_h = int(h * (max_edge / w))
            else:
                new_h = max_edge
                new_w = int(w * (max_edge / h))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

        out_path = os.path.join(out_dir, target_name)
        img.save(out_path, format="JPEG", quality=82, optimize=True)
        saved_count += 1
        total_bytes += os.path.getsize(out_path)

    print(f"Erfolgreich {saved_count} Bilder generiert.")
    print(f"Gesamtgroesse: {total_bytes / (1024*1024):.2f} MB")

if __name__ == "__main__":
    main()
