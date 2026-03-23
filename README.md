# pgagroal website

This repository hosts the source for the VitePress-based website for the pgagroal project.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [pnpm](https://pnpm.io/)

## Getting Started

Follow these steps to get your local development environment set up:

### 1. Clone the Repository

```sh
git clone https://github.com/pgagroal/pgagroal.git
cd pgagroal/website
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:
```sh
pnpm install
```

### 3. Start the Development Server

To start the local development server and begin working on the VitePress site, run:
```sh
pnpm dev
```

By default, the dev server runs at `http://localhost:5173/`.

### 4. Build the Site

To generate the production build, run:

```sh
pnpm build
```

### 5. Preview the Production Build

To serve the generated site locally after building it, run:

```sh
pnpm preview
```

## License

This work is licensed according to the terms of the
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)
