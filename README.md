# Hardik Abrol — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live-Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://hardik-abrol-portfolio.vercel.app)

Welcome to the repository for my personal portfolio website! This site showcases my work, projects, technical skills, certifications, and academic background in Computer Engineering.

**Live Link:** [https://hardik-abrol-portfolio.vercel.app](https://hardik-abrol-portfolio.vercel.app)

---

## 🚀 Key Features

* **Visual Experience:** Designed with a premium dark-mode theme, glassmorphic card layouts, custom typography, and dynamic gradients.
* **Interactive Neural Canvas:** Built an animated particle-based neural network background behind the Hero section to reflect my passion for Machine Learning.
* **Smooth Animations:** Integrated Framer Motion for scroll reveals, stagger entry effects, and 3D hover tilts on project cards, alongside a GSAP-powered infinite tech-stack marquee.
* **Live GitHub Stats:** Fetches my public repository metrics and follower count in real-time directly from the GitHub API, paired with a live contribution chart.
* **Fully Functional Contact Form:** Connected to EmailJS to receive visitor messages directly in my inbox.
* **Responsive Layout:** Optimized for all screen sizes, from mobile devices to desktop monitors, with a responsive side-menu navigation.

---

## 🛠️ Tech Stack

* **Framework:** React 19 + Vite
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion + GSAP (GreenSock)
* **API Integration:** GitHub REST API + EmailJS SDK
* **Quality Assurance:** Oxlint (Linter)
* **Hosting:** Vercel

---

## 📂 Project Structure

```text
src/
  assets/         # Static assets (profile image, logos)
  components/     # Reusable UI components (Buttons, Cards, Loader, MouseGlow)
  sections/       # Portfolio page sections (Hero, About, Projects, Contact, etc.)
  animations/     # Shared Framer Motion animation variants
  hooks/          # Custom hooks (active section tracker, GitHub stats fetcher)
  utils/          # Utility helper functions
  constants/      # Navigation links and global routing constants
  data/           # Content database files (projects, education, certifications)
  pages/          # Main Home page container
```

---

## 💻 Local Development

To run this project locally, make sure you have [Node.js](https://nodejs.org) installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hardikabrol8/hardik-abrol-portfolio.git
   cd hardik-abrol-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy the example environment file and add your credentials:
   ```bash
   cp .env.example .env
   ```
   *Note: Fill in your EmailJS credentials in the `.env` file to enable the contact form.*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🛡️ License

Built by [Hardik Abrol](https://github.com/Hardikabrol8). Feel free to explore, fork, and use the code.
