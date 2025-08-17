React UI Assignment – InputField & DataTable
This repository implements two reusable UI components (InputField and DataTable) using React, TypeScript, TailwindCSS, and Storybook. It includes accessibility, theming, and Storybook docs with variants/states.

🧱 Tech Stack
React 18 + TypeScript
Vite
TailwindCSS
Storybook 
📦 Getting Started
# 1) Install dependencies
npm install

# 2) Start the component dev server
npm run dev

# 3) Start Storybook
npm run storybook

# 4) Production builds
npm run build            # Vite build
npm run build-storybook  # Storybook static site

🗂️ Project Structure

frontend-assignment/
│── node_modules/
│── public/
│── src/
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.stories.tsx
│   │   │   └── InputField.test.tsx
│   │   ├── DataTable/
│   │   │   ├── DataTable.tsx
│   │   │   ├── DataTable.stories.tsx
│   │   │   └── DataTable.test.tsx
│   ├── examples/
│   │   ├── AppExample.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│── .storybook/   👈 auto-created
│── .gitignore
│── index.html
│── package.json
│── tsconfig.json
│── tsconfig.node.json
│── tailwind.config.js
│── postcss.config.js

✨ Components
1) InputField
Features: label, placeholder, helper text, error message, disabled, invalid, loading, variants (filled/outlined/ghost), sizes (sm/md/lg), optional clear button, optional password toggle, light/dark support.

Accessibility: label uses htmlFor; input adds aria-invalid and aria-describedby for helper/error text; clear/password buttons have aria-labels.

Performance: purely controlled with minimal renders; only lightweight DOM; no heavy effects.

2) DataTable
Features: tabular display, column sorting, row selection (single/multiple), loading state, empty state. Generic component with Column<T> typing.

Props:

data: T[]
columns: Column<T>[]
loading?: boolean
selectable?: boolean
onRowSelect?: (rows: T[]) => void
rowKey: (row: T) => string | number (ensures stable selection)
selectionMode?: 'single'|'multiple'
emptyMessage?: string
Accessibility: semantic table roles; header aria-sort; row keyboard selection via Space / Enter; focus styles.

Performance: derived data (sorted rows, selected rows mapping) memoized with useMemo; sort toggling is O(n log n) on demand; selection uses Set for O(1) toggles. For very large tables, add virtualization (e.g., react-window).

🧪 Storybook
Autodocs enabled (tags: ['autodocs'])
Stories cover states/variants, including dark mode and selection modes
a11y addon included
🚀 Deployment

Chromatic: publish Storybook directly
https://68a1ac3c80cc2393aa2e48cb-ognxpymryb.chromatic.com/
