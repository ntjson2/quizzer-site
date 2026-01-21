# Quizzer Site

An interactive quiz application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 Interactive multiple-choice quiz interface
- 📊 Real-time score tracking
- ✅ Instant feedback with answer explanations
- 🎨 Beautiful UI with dark mode support
- 📱 Fully responsive design
- 10 diverse questions covering various topics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ntjson2/quizzer-site.git
cd quizzer-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Click "Start Quiz" on the home page
2. Select an answer for each question
3. View explanations after each answer
4. Complete all questions to see your final score
5. Retry the quiz or return to home

## Project Structure

```
quizzer-site/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── quiz/
│       └── page.tsx       # Quiz page
├── data/
│   └── questions.ts       # Quiz questions data
├── types/
│   └── quiz.ts           # TypeScript interfaces
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
