# EGWebDev Portfolio

This is the personal portfolio website of Ezequiel Gonzalez. It showcases my web development projects, skills, and contact information.

## See it live

[https://www.egwebdev.com](https://www.egwebdev.com)

## Features

- Responsive, mobile-friendly design
- Projects showcase with descriptions and links
- Contact form with backend integration
- Smooth scrolling and modern UI components
- Built with React, Mantine, and Node.js

## Tech Stack

- **Frontend:** React, Mantine, TailwindCSS
- **Backend:** Node.js, Express
- **Deployment:** Nginx, PM2, LetsEncrypt (HTTPS)
- **Database:** MongoDB (for contact form)

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm
- PM2 (optional for process management)
- MongoDB connection string for contact form

### Installation

1. Clone the repository:

```bash
git clone https://github.com/GonzalezEzequiel-FS-1/portfolio.git
cd portfolio
```

### Install dependencies:

```bash
npm install
```

### Create a .env file with your environment variables:

```bash
PORT=3000
DBURL=<your-mongodb-uri>
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=<your-email>
EMAIL_PASS=<your-email-password>
```

### Start the back end:
```bash
pm2 start server.js --name portfolio
```

### Build the front end:
```bash
cd frontend
npm run build
```
### Configure Nginx to serve the frontend and proxy API requests to port 3000.

### Contact information:

- Email: [e.gonzalez@egwebdev.com](e.gonzalez@egwebdev.com)
- LinkedIn: [https://www.linkedin.com/in/gonzalez-ezequiel](https://www.linkedin.com/in/gonzalez-ezequiel])
- GitHub: [https://github.com/GonzalezEzequiel-FS-1](https://github.com/GonzalezEzequiel-FS-1)

