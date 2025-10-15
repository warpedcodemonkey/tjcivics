# Thomas Jefferson Civic Center Website

A React-based website for the Thomas Jefferson Civic Center in Jacksonville, FL.

## Features

- Community information and mission
- Membership management (Individual and Business)
- Facility rental booking system
- Interactive calendar with DynamoDB backend
- Online payment processing via Square
- PDF document signing for rental agreements
- Event management

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: React Router v6
- **Backend**: AWS DynamoDB
- **Payment Processing**: Square API
- **PDF Handling**: pdf-lib
- **Hosting**: AWS S3 + CloudFront

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- AWS account with DynamoDB access
- Square developer account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory, ready for deployment to AWS S3.

## Deployment to AWS S3

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your S3 bucket
3. Configure the bucket for static website hosting
4. Set up CloudFront distribution (optional, for HTTPS and CDN)

## Configuration

See `.env.example` for required environment variables.

## Contact

Thomas Jefferson Civic Center
- Email: TJCivicClub@gmail.com
- Phone: (904) 424-1873
- Address: 8237 Nevada St, Jacksonville, FL 32220
