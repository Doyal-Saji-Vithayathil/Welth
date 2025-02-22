 AI Finance Platform

 Overview
The AI Finance Platform is a full-stack financial management application built using modern web technologies. This project showcases AI-driven insights, automated transactions, and a user-friendly dashboard to track expenses, manage budgets, and analyze financial data.

Tech Stack
- Frontend: React 19, Next.js 15, Tailwind CSS, Shadcn UI
- Backend: Next.js API Routes, Supabase, Prisma
- Authentication: Clerk
- AI & Automation: Arcjet, Inngest
- Database: PostgreSQL (via Supabase)
- Deployment: Vercel

Features
- User Authentication (via Clerk)
- Secure Database Storage (Supabase & Prisma)
- Dashboard for Expense Tracking
- AI-Powered Receipt Scanner
- Automated Recurring Transactions
- Transaction Filtering & Sorting
- Budget Alerts via Email
- Monthly Financial Reports
- AI-Generated Insights
- Bot Protection with Arcjet Shield

 Installation & Setup
 Prerequisites
- Node.js (v18+)
- PostgreSQL
- Supabase Account
- Clerk API Key
- Arcjet & Inngest Configuration

Steps to Run Locally

1. Clone the repository: 
   git clone :"clone the repo"
   cd ai-finance-platform
  
2. Install dependencies:
   npm install
   
3. Set up environment variables (`.env.local`): 
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   DATABASE_URL=your_database_url
   CLERK_SECRET_KEY=your_clerk_secret_key
   INNGEST_API_KEY=your_inngest_api_key
   ARCJET_SECRET_KEY=your_arcjet_secret_key
   
4. Run database migrations:  
   npx prisma migrate dev

5. Start the development server: 
   npm run dev



