# 🤖 AI Developer Context & Architecture Manual

## Overview
This repository contains a collection of modernized, mobile-first React/TypeScript applications designed to help students learn Chemistry. It specifically focuses on various topics such as inter-molecular forces, alkane combustion, gas reactions, and molecule polarity.

## 🏗 Directory Structure & Architecture

The workspace combines independent micro-frontend-like React applications inside a shared repository (`c:\Users\Zollf\ChemieApps`).

### The Core Modernized Apps (React + Vite + TS)
1. **ZMWW (Zwischenmolekulare Wechselwirkungen)**
2. **Alkane-Verbrennungs-Trainer**
3. **Gasreaktionen**
4. **Molekülpolarität**
5. **Wechselwirkungen**
6. **Ionen-und-Salze** (Vanilla HTML/JS/CSS structure, legacy but updated)
7. **Saeure-Base-Trainer** (Vanilla HTML/JS/CSS structure, legacy but updated)

### Shared Architectural Approach
Most of the modernized React applications (e.g., ZMWW, Gasreaktionen) follow a uniform "3-Pillar Component Architecture":
- **Main View (`App.tsx`)**: Manages routing through state (e.g., viewing Quiz vs. Visualization vs. Resources).
- **Interactive Logic (`EnhancedQuizPanel.tsx`)**: An advanced, gamified quiz system with progress tracking, Streaks, timers, and specialized question formats (multiple-choice, matching, ordering, input).
- **Core Visualizations**: Topic-specific interactive elements (e.g., `GasVisualization.tsx`, `GuideMode.tsx`).
- **Learning Resources (`LearningResources.tsx`)**: Contains topic-specific glossaries, standard checklists, and a section for common student mistakes. 

## 🎨 Design System (Crucial for UI Consistency)
All modern apps must adhere strictly to the established **BioApps** / **ChemieApps** design paradigms:
- **Primary Color:** Orange (`#f97316`)
- **Accent Color:** Cyan (`#0891b2`)
- **Success Tone:** Green (`#10b981`)
- **Error Tone:** Red (`#ef4444`)
- **Animations:** Extensive use of `framer-motion` for page transitions, visual feedback during quizzes, and modal toggles.
- **Styling Method:** Vanilla CSS files explicitly linked to their components (Standard CSS instead of Tailwind) to maintain portability. Avoid generic colors, use CSS variables for ease of maintainability.
- **Mobile-First Layouts:** Standard break-points at `641px`. Padding should be multiple of 8px.

## 💾 State Management
- Apps do not rely heavily on external state management libraries (no Redux).
- Standard React Hooks (`useState`, `useMemo`) track all UI states and gamification progress (streak, score, timers).
- Session memory drops on reload; future feature expansions might involve local storage implementation or simple backend API connectivity.

## 🚀 How to Add New Features

### 1. Adding a new question type to quizzes
In `EnhancedQuizPanel.tsx`, find the `QuestionType` type alias and append the new type. Implement the new structure within the `ENHANCED_QUESTIONS` array. In the render loop, map the `current.type` to your new interactive UI layout. Make sure to plug it into the `handleAnswer` handler to validate results accurately.

### 2. Expanding the Glossary/Checklists
In `LearningResources.tsx`, append your new data chunks into the `GLOSSARY`, `CHECKLIST`, or `COMMON_MISTAKES` arrays.

### 3. Creating a new module
Simply clone an existing React framework directory (like `ZMWW`), rename the variables/ports in `vite.config.ts`, empty out the old question logic from `EnhancedQuizPanel.tsx`, rewrite `App.tsx` top-level labels, and spin up a new specific Visualization component.

## 🧠 Future AI Directives
- **Do not introduce TailwindCSS automatically** unless directly tasked by the user. Maintain the current standard of importing `.css` files.
- **When creating interactive elements**, always try to add subtle Framer Motion sequences. E.g. `initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}`.
- **Adhere to the exact Orange/Cyan color space** using the standard Hex codes detailed above.
- **Rely heavily on 'Step-by-step' logic breakdowns** in UI to aid students (e.g., the hint array system implemented in `EnhancedQuizPanel`).

> Please review the `.tsx` components and individual `App.tsx` files for heavily annotated React components structure and logic tracing. 
