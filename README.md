# Shivam Gill Portfolio

A premium, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
.
├── public
│   ├── favicon.svg
│   ├── Shivam_CV.pdf
│   └── shivam_img.jpeg
├── src
│   ├── components
│   ├── data
│   ├── hooks
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Notes

- The contact form currently uses a mock submission flow for a polished demo experience.
- You can replace the submit handler in `src/components/Contact.jsx` with EmailJS or your preferred backend endpoint.
- The existing CV and profile image are already wired into the live UI.
