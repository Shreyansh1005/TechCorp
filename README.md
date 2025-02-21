TechConf2025

TechConf2025 is a SvelteKit-based web application designed for managing and showcasing technology conferences. It provides a seamless experience for users to explore conference schedules, speaker details, and session information.

🚀 Features

Modern UI with SvelteKit - A fast and reactive frontend.

Dynamic Routing - Utilizes SvelteKit's powerful routing system.

Server-Side Rendering (SSR) - Improves performance and SEO.

Vercel Deployment - Easily deployable for production.

Styling with SCSS - Custom styling using SCSS.

Optimized Performance - Fast and efficient due to Svelte’s compilation.

Pages

Home Page: A visually appealing landing page that provides an introduction to the event.

Schedule: A detailed list of conference sessions, including time slots and speakers.

Speakers: Information about keynote speakers, including their expertise and session details.

Sponsors: A section dedicated to event sponsors, showcasing their contributions.

Registration: An interactive registration form for attendees.

Contact Page: Provides event-related contact information.

📌 Tech Stack

Frontend: SvelteKit (v2.x)

Styling: SCSS

Deployment: Vercel

Folder Structure

The project follows a clean and modular structure for maintainability and scalability.

techconf2025/
│── src/
│   ├── routes/
│   │   ├── +page.svelte  # Home page
│   │   ├── schedule/
│   │   │   ├── +page.svelte  # Conference schedule
│   │   ├── speakers/
│   │   │   ├── +page.svelte  # Speaker details
│   │   ├── sponsors/
│   │   │   ├── +page.svelte  # Sponsors section
│   │   ├── contact/
│   │   │   ├── +page.svelte  # Contact page
|   |   |── about/
│   │   │   ├── +page.svelte  # About page
│   ├── components/
│   │   ├── Header.svelte  # Navigation bar
│   │   ├── Footer.svelte  # Footer component
│   │   ├── ScheduleTable.svelte  # Table component
│   │   ├── SpeakerCard.svelte  # Speakers component
│   │   ├── SponsorsGrid.svelte  # Sponsors component
│   ├── styles/
│   │   ├── global.scss  # Global styles
│── static/
│── package.json
│── svelte.config.js
│── README.md

Installation & Setup

Follow these steps to run the project locally:

Clone the repository:

git clone https://github.com/Shreyansh1005/techconf2025.git
cd techconf2025

Install dependencies:

npm install

Run the development server:

npm run dev

Open your browser and navigate to http://localhost:5173/

Deployment

The project is deployed using Vercel:

Build the project:

npm run build

Deploy with Vercel:

vercel

Contribution Guidelines

Fork the repository.

Create a feature branch (git checkout -b feature-name).

Commit changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-name).

Create a Pull Request.

License

This project is licensed under the MIT License. Feel free to modify and use it for your needs.