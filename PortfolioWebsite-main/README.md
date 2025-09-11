## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) 
- **Language**: [TypeScript](https://www.typescriptlang.org/) 
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 
- **Icons**: [Heroicons](https://heroicons.com/) 

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install the dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── components/         # Reusable React components
│   ├── header.tsx      # Navigation header
│   ├── footer.tsx      # Site footer
│   ├── themeSwitch.tsx # Dark/light mode toggle
│   └── ...
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── projects.tsx    # Projects page
│   └── _app.tsx        # App wrapper
├── public/             # Static assets
│   └── pictures/       # Images and media
├── styles/             # Global styles
│   └── globals.scss    # Main stylesheet
└── package.json        # Dependencies and scripts
```
## Deployment

### Vercel (for Next.js)
1. Push your code to GitHub
2. Connect your github repository to [Vercel](https://vercel.com)
3. Deploys automatically on every push to main branch
