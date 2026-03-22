# 🦁 CareerLens AI

CareerLens AI is an agentic career skill recommendation platform designed to help students and professionals bridge the gap between their current skills and their dream roles. 

Built with a **premium student portfolio aesthetic**, the app features a rich interactivity system, ambient UI elements, and a powerful AI engine powered by **Claude 3.5 Sonnet**.

## ✨ Features

- **Agentic Career Coach**: Upload your resume (PDF) for a deep-dive analysis of your skills.
- **Skill Gap Identification**: AI-driven insights into what's missing for your target career.
- **Student Portfolio Aesthetic**: A high-end workspace vibe with 10 distinct ambient background elements.
- **Dynamic Scroll Animations**: Fluid, scroll-driven interactions that bring the platform to life.
- **Multipage Experience**: Dedicated sections for Features, Pricing, Student Stories, and an interactive Dashboard.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS & Modern CSS Tokens
- **AI Backend**: [Anthropic Claude API](https://www.anthropic.com/api)
- **PDF Processing**: `pdf-parse`
- **Hosting**: Firebase Hosting (Next.js Framework Support)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Anthropic API Key

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/frozenthunder994/CareerLens-.git
   cd CareerLens-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   ANTHROPIC_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment to Firebase

This project is pre-configured for **Firebase Hosting**. Due to the use of Next.js SSR and API routes, it requires the **Firebase Blaze (Pay-as-you-go) Plan**.

1. **Switch to Blaze Plan** in the [Firebase Console](https://console.firebase.google.com/).
2. **Login** to the CLI: `npx firebase login`
3. **Deploy**: `npm run deploy`

---
Made with ❤️ for Career Excellence.
