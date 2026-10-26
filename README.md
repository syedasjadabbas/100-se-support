# 100 Se Support

> Web platform for 100 Se Support, a community welfare initiative facilitating charitable contributions and humanitarian campaigns.

---

## Overview

100 Se Support is a front-end web application developed for the 100 Se Support welfare initiative. The platform connects donors with urgent humanitarian causes, providing detailed campaign visibility, verified case tracking, field reports, video updates, and direct donation information.

---

## Features & Pages

- **Home (`/`)**: Overview of active welfare initiatives, featured campaigns, quick donation entry points, and mission statement.
- **About Us (`/about-us`)**: Mission, core objectives, organizational background, and team structure.
- **Campaigns & Welfare Cases**:
  - **Flood Relief (`/flood-cases`, `/campaigns-page`)**: Relief drives and aid distribution for flood-affected families.
  - **Monthly Support (`/monthly-cases`)**: Recurring sustenance and ration assistance for low-income households.
  - **Heatwave Relief (`/heatwave-cases`, `/heatwave`)**: Emergency cooling and hydration aid stations during extreme heat waves.
  - **Healthcare Assistance (`/healthcare-cases`, `/healthcare`)**: Medical expense subsidies and surgical support campaigns.
  - **Single Case Detail (`/campaigns/:slug`, `/case/:slug`)**: Case background, requirements, verification details, and dedicated donation action.
- **Donate Now (`/donate-now`, `/donate`)**: Bank transfer details, local payment methods, and donation guidelines.
- **Blog & Field Updates (`/blog`, `/blog/:slug`)**: Ground reports, relief updates, and single post articles.
- **Author Pages (`/author/:slug`)**: Contributor profiles and published dispatches.
- **Videos Gallery (`/videos`)**: Embedded video reports and campaign documentation.
- **Global Search (`/search`)**: Real-time keyword search across campaigns and welfare articles.
- **Contact Us (`/contact-us`, `/contacts`)**: Contact information, inquiry form, and community support links.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## Project Structure

```
100-se-support/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx             # Route definitions and application shell
│   ├── main.tsx            # DOM mounting and application entrypoint
│   ├── components/         # Shared Header, Footer, and UI utility widgets
│   ├── pages/
│   │   ├── About/          # About page view
│   │   ├── Author/         # Author profile views
│   │   ├── Blog/           # Blog listing and single post views
│   │   ├── Cases/          # Categorized cases and case detail views
│   │   ├── Contact/        # Contact form and details
│   │   ├── Donate/         # Donation methods and instructions
│   │   ├── Home/           # Landing page
│   │   ├── Search/         # Global search results view
│   │   └── Videos/         # Video gallery
│   ├── data/               # Static case data and campaign metadata
│   ├── styles/             # Modular CSS stylesheets
│   ├── types/              # TypeScript interfaces and route types
│   └── utils/              # Helper utilities
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
git clone https://github.com/syedasjadabbas/100-se-support.git
cd 100-se-support
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

Type-check and build the static bundle for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run Oxlint to check code quality:

```bash
npm run lint
```
