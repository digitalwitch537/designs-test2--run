# Aura Minimalist Clothing

A premium, minimalist clothing brand showcase built with React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Modern Animations**: Smooth entrance and scroll animations using `motion`.
- **Minimalist Aesthetic**: Clean typography and spacious layout.
- **Single Page Architecture**: Fast and fluid user experience.

## Tech Stack

- **React 19**: Modern UI library.
- **Tailwind CSS 4**: Utility-first styling.
- **Motion**: High-performance animations.
- **Lucide React**: Beautiful, consistent icons.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Security & Quality Scanning

This project is configured with GitHub Actions for automated security and quality checks:

- **SonarQube**: Static Application Security Testing (SAST) and code quality analysis.
- **OWASP Dependency Check**: Software Composition Analysis (SCA) to identify vulnerable dependencies (e.g., the intentionally included `lodash@4.17.15`).

### GitHub Secrets Required

To run the CI workflow, you must configure the following secrets in your GitHub repository:

1. `SONAR_TOKEN`: Your SonarQube analysis token.
2. `SONAR_HOST_URL`: The URL of your SonarQube server.

### SonarQube Configuration

The project includes a `sonar-project.properties` file that configures the scanner to ingest OWASP Dependency Check reports. Ensure the **Dependency-Check SonarQube Plugin** is installed on your SonarQube instance to visualize these results in the dashboard.
