# Creative Agency Website

This is the codebase for a creative agency's website built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Framer Motion](https://www.framer.com/motion/), and [React](https://react.dev/). The project follows an Astro-first approach, leveraging Astro's strengths for content management and static site generation while strategically using React for interactive components.

## Project Overview

This website showcases the creative agency's portfolio, services, team, and contact information. It features a modern design, smooth animations, and a focus on performance and accessibility.

## Technology Stack

*   **Astro:** A modern static-site generator that allows for component-driven development with a focus on performance.
*   **@astrojs/react:**  Integration for using React components within Astro.
*   **@astrojs/tailwind:** Integration for using Tailwind CSS with Astro.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Shadcn UI:** A collection of reusable UI components built with Tailwind CSS and Radix UI, providing accessible and customizable UI elements.
*   **Framer Motion:** A powerful animation library for React, used to create engaging and smooth animations.
*   **React:** A JavaScript library for building user interfaces, used selectively for interactive components.
*   **class-variance-authority:** A library for managing complex conditional class names with Tailwind CSS.
*   **clsx:** A tiny utility for constructing `className` strings conditionally.
*   **lucide-react:** A library providing a comprehensive set of beautifully designed icons as React components.
*   **tailwind-merge:** A utility to efficiently merge Tailwind CSS classes in JS without style conflicts.
*   **tailwindcss-animate:** A Tailwind CSS plugin for creating CSS animations.
*   **TypeScript:** For type safety and improved code maintainability.

## Project Structure
content_copy
download
Use code with caution.
Markdown

your-project-name/
├── src/
│ ├── components/
│ │ ├── astro/ # Astro components (layout, header, footer, etc.)
│ │ └── react/ # React components (interactive elements)
│ │ └── ui/ # Shadcn UI components (auto-generated)
│ ├── layouts/ # Astro layouts
│ ├── pages/ # Astro pages (primarily .astro files)
│ ├── styles/ # Global styles and Tailwind configuration
│ │ └── globals.css # Tailwind directives
│ ├── public/ # Static assets (images, fonts)
│ └── lib/ # Utility functions
│ └── utils.ts # Shadcn utilities
├── components.json # Shadcn UI configuration
├── astro.config.mjs # Astro configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── package.json

## Getting Started

**Prerequisites:**

*   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
*   [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/))

**Installation:**

1. Clone the repository:

    ```bash
    git clone [your-repository-url]
    cd [your-project-name]
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

**Development:**

1. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

2. Open your browser and visit `http://localhost:4321` (or the port specified in your terminal).

**Building for Production:**

```bash
npm run build
# or
yarn build
# or
pnpm run build
content_copy
download
Use code with caution.

This will generate a static build of your website in the dist/ directory.

Deployment:

You can deploy your Astro website to any static site hosting provider, such as:

Netlify

Vercel

AWS Amplify

GitHub Pages

Cloudflare Pages

Refer to the Astro documentation for detailed deployment instructions: https://docs.astro.build/en/guides/deploy/

Adding Components

Shadcn UI: Use the Shadcn CLI to add new components:

npx shadcn-ui@latest add [component-name]
content_copy
download
Use code with caution.
Bash

Custom Components: Create new Astro or React components in the appropriate directories under src/components/.

Customization

Tailwind CSS: Modify the tailwind.config.js file to customize the default styles, add new utility classes, or define your design tokens.

Shadcn UI: Customize the appearance of Shadcn UI components by overriding their default styles using Tailwind utility classes or by modifying the generated component code directly in src/components/react/ui.

Global Styles: Add or modify global styles in src/styles/globals.css.

Contributing

Contributions are welcome! Please feel free to open issues or pull requests on the repository.

License

This project is licensed under the [Your License Name] - see the LICENSE file for details. (Remember to add a LICENSE file if you are making this open source).

