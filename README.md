# Albeto Watch Company Website

This project is a responsive Single-Page Application (SPA) for Albeto Watch Company, designed to showcase luxury, vintage, and smart watches, provide company information, and facilitate customer interaction. The site is inspired by the requirements and design guidelines in "Alberto Clocks.pdf".

---

## Problem Definition

Alberto Watch Company needed a modern, responsive web portal to present their full-service watch repair, appraisal, and retail business. The portal must display a wide selection of luxury and brand watches, provide detailed product information, and offer seamless customer support and contact options.

---

## Design Specifications

- **Single-Page Application:** Built with React and React Router for smooth navigation.
- **Responsive Layout:** Works on all major browsers (Chrome, Edge, Firefox, Safari, IE) and devices.
- **Attractive UI:** Uses Tailwind CSS for modern fonts, colors, and subtle animations.
- **Logo & Branding:** Prominent logo and color scheme for brand identity.
- **Navigation:** Menu options for Products, Technology, Store Locator, Support, Gallery, About Us, Contact Us, and Site Map.
- **Hover & Active States:** Menu items change color on hover and click, with fade-in/fade-out transitions.
- **Visitor Count:** Displayed at the top right beside the logo.
- **Scrolling Ticker:** Bottom ticker shows current date, time, and location using HTML5 geolocation.
- **Product Sections:** Watches categorized into Vintage, Luxury, and Smart Watches.
- **Product Details:** Clicking a product opens a modal popup with details and price.
- **Gallery:** Responsive grid for viewing watch images.
- **Contact & Support:** Dedicated pages with email, address, phone, and embedded map.
- **Privacy Policy:** Clear statement on data collection and user rights.
- **Accessibility:** Semantic HTML and readable fonts for all devices.

- **figma**
Visit https://www.figma.com/design/PuU3cvWOlp3f1D8TQtBjfH/Untitled?node-id=16-3&t=L60u7P90arOYLwbu-1
---

## Project Structure

- **src/pages/**: Main page components (Home, AboutUs, Gallery, Service, Support, Contact, PrivacyPolicy, Sitemap, Vintage, Luxury, SmartWatch, DressWatch).
- **src/component/**: Reusable UI components (Header, FooterComponent, HeroSection, OurService, OurCollectionComponent, AboutUsComponent, TechnologyComponent, ContactComponent, MapEmbed, etc.).
- **src/assets/**: Images and icons.
- **src/App.jsx**: Main app entry point, sets up routing and layout.
- **src/index.js**: React root.

---



## Key Functionalities

- **Product Line-up:** Users can browse Vintage, Luxury, and Smart Watches. Each product line displays a list of watches with modal popups for details and pricing.
- **Technology Section:** Highlights watchmaking technologies used by Alberto.
- **Support & Contact:** Easy access to support info, business hours, and store locations.
- **Gallery:** View images of watches and store.
- **Site Map:** Overview of website structure.
- **About Us:** Company history, mission, values, and team.
- **Privacy Policy:** Data protection and user rights.

---

## Installation Instructions

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start the development server:**
   ```
   npm start
   ```
3. **Build for production:**
   ```
   npm run build
   ```

---

## Test Data

Watch  data are managed using JavaScript variables within modules (e.g., `watchData.jsx`), rather than external JSON files. This approach keeps the application purely client-side and easy to deploy, while still allowing dynamic rendering of event information, categories, and galleries.

---

## Hardware & Software Requirements

- **Hardware:** Intel Core i3/i5 or higher, 8GB RAM+, SVGA, 500GB HDD, mouse, keyboard.
- **Software:** Windows OS, Edge/Chrome/Firefox/Safari, Node.js, React, Tailwind CSS.
- **Frontend:** HTML5, CSS, Bootstrap, JavaScript, React, Figma (for design).
- **Data Store:** JSON files.

---

## Documentation & Deliverables

- **Source Code:** All React components and pages.
- **Project Report:** Problem definition, design specs, flowcharts, data flow diagrams.
- **Test Data:** Sample product and user data.
- **Installation Instructions:** See above.
- **ReadMe.doc:** Lists assumptions and project summary.
- **Demo Video:** Demonstrates website functionality.
- **Live URL:** (Optional) Hosted site link.

---

## Reference

This codebase and its structure are based on the requirements and design guidelines provided in "Alberto Clocks.pdf".

---

**For more details, refer to the PDF and explore the codebase.**