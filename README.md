# TorkBiz - Business & Trading Next.js Template

![TorkBiz Banner](public/images/logo/logo.png)

**TorkBiz** is a modern, responsive, and high-performance web template designed for business consultancies, trading platforms, and corporate websites. Built with **Next.js 14+ (App Router)** and **Bootstrap 5**, it features a fully responsive design, dynamic theming (Light/Dark mode), and smooth animations.

## 🚀 Features

* **⚡ Next.js 14+:** Utilizes the latest App Router architecture for optimized performance and SEO.
* **🎨 Bootstrap 5 & SASS:** Modular styling with SCSS variables for easy customization.
* **🌓 Dark & Light Mode:** Built-in theme switcher with persistent state management.
* **✨ Animations:** Smooth scroll animations powered by **AOS** (Animate On Scroll).
* **📱 Fully Responsive:** Mobile-first design optimized for all devices.
* **🎠 Sliders:** Interactive testimonials and banners using **Swiper.js**.
* **🔐 Authentication UI:** Pre-built pages for Login, Register, and Password Reset.
* **📂 Organized Structure:** Component-based architecture for easy maintenance.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **Node.js**: v18.17.0 or higher
* **npm** or **yarn**

---

## 📦 Installation & Setup

Follow these steps to get the project running locally:

### 1. Clone the Repository
```bash
git clone (https://github.com/thenexgenix/Torkbiz-bootstrap.git)
cd Torkbiz-bootstrap

```

### 2. Install Dependencies

```bash
npm install
# or if using yarn
yarn install

```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm start

```

---

## 📂 Project Structure

This project follows a structured Next.js App Router pattern with organized assets and styles.

```text
Torkbiz-bootstrap/
├── .next/                   # Next.js build output (typically ignored in git)
├── node_modules/            # Project dependencies (ignored in git)
├── public/                  # Static assets served directly
│   ├── css/                 # Global and vendor CSS files
│   │   ├── all.min.css
│   │   ├── aos.css
│   │   ├── bootstrap.min.css
│   │   ├── lightcase.css
│   │   ├── style.css
│   │   ├── style.css.map
│   │   └── swiper-bundle.min.css
│   ├── images/              # Project images
│   │   ├── about/
│   │   ├── account/
│   │   ├── banner/
│   │   ├── bg/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── cta/
│   │   ├── feature/
│   │   ├── footer/
│   │   ├── icon/
│   │   ├── logo/
│   │   ├── others/
│   │   ├── partner/
│   │   │   └── light/
│   │   ├── service/
│   │   ├── team/
│   │   ├── team - Copy/     # [Backup folder]
│   │   ├── team-details/
│   │   ├── testimonial/
│   │   ├── favicon.png
│   │   └── og.png
│   ├── js/                  # Static JavaScript files
│   └── webfonts/            # Font assets
│       ├── fa-brands-400.ttf
│       ├── fa-brands-400.woff2
│       ├── fa-regular-400.ttf
│       ├── fa-regular-400.woff2
│       ├── fa-solid-900.ttf
│       └── fa-solid-900.woff2
├── src/                     # Main source code
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/          # Authentication routes (grouped)
│   │   │   ├── (reset)/
│   │   │   ├── (signin)/
│   │   │   └── (signup)/
│   │   ├── (errors)/        # Error handling routes (grouped)
│   │   ├── (home)/          # Homepage variations (grouped)
│   │   │   ├── home-1/
│   │   │   └── home-2/
│   │   ├── (main)/          # Main layout routes (grouped)
│   │   │   ├── (blogs)/
│   │   │   ├── (team)/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── price/
│   │   │   └── service/
│   │   ├── Preloader.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js        # Root layout
│   │   ├── not-found.js     # 404 page
│   │   ├── page.js          # Root page
│   │   └── page.module.css  # (Inferred) CSS module for root page
│   ├── components/          # React components
│   │   ├── common/          # Shared components
│   │   └── modules/         # Feature-specific components
│   │       ├── blogs/
│   │       └── home/
│   │   └── AOSInit.js       # Animate On Scroll initialization
│   └── styles/              # SASS/SCSS styles
│       └── sass/
│           ├── abstracts/
│           ├── base/
│           ├── components/
│           ├── layout/
│           ├── pages/
│           ├── themes/
│           ├── vendors/
│           └── style.scss   # Main SASS entry point
├── .gitignore               # Git ignore rules
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # JavaScript compiler options
├── next.config.mjs          # Next.js configuration
├── package-lock.json        # NPM lock file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation

```

---

## 🎨 Customization Guide

### 1. Updating the Logo

Navigate to `src/components/common/Navbar.js` (or relevant header component) to update the `<Image />` source path.
Replace images in `public/images/logo/`:

* `logo.png` (Default)
* `logo-dark.png` (For Light Mode)
* `logo-white.png` (For Dark Mode)

### 2. Changing Colors (SASS)

This project uses a modular SASS structure. To change brand colors:

1. Open `src/styles/sass/abstracts/_variables.scss` or `src/styles/sass/themes/_theme.scss`.
2. Update the `$primary-color`, `$secondary-color`, or other variable values.
3. Next.js will automatically hot-reload your style changes.

### 3. Modifying Navigation

To add or remove menu items:

* Edit `src/components/common/Navbar.js`.
* Update the `menu` array or HTML structure to link to your new pages.

### 4. Adding New Pages

To create a new page (e.g., FAQ):

1. Create a folder `src/app/(main)/faq/`.
2. Add a `page.js` file inside that folder.
3. Export your React component as default.

---

## 🧩 Technologies Used

* **Framework:** [Next.js 14](https://nextjs.org/)
* **Language:** JavaScript (ES6+) / React
* **Styling:** Bootstrap 5, SASS (SCSS)
* **Icons:** FontAwesome, Lucide React
* **Animations:** AOS (Animate On Scroll)
* **Slider:** Swiper.js

---
