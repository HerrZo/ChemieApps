import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface BeakerProps {
    nValue: number;
    vValue: number;
}

export function Beaker({ nValue, vValue }: BeakerProps) {
    const volumePercent = (vValue / 2.0) * 100; // max 2L is 100% height
    const intensity = Math.min(1, (nValue / vValue) / 10);
    const rgb = `rgba(249, 115, 22, ${0.1 + intensity * 0.9})`; // Orange tint
    
    // We want the particles to move. We fix the random positions using useMemo 
    // to avoid layout shifts on re-renders, unless nValue changes.
    const particles = useMemo(() => {
        return Array.from({ length: Math.min(60, nValue * 3) }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            delay: `${Math.random() * 2}s`
        }));
    }, [nValue]);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="beaker">
                <motion.div 
                    className="beaker-liquid" 
                    initial={false}
                    animate={{ height: `${volumePercent}%`, backgroundColor: rgb }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {particles.map(p => (
                        <div key={p.id} className="particle opacity-60 absolute" style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay
                        }}></div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
