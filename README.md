# 🚀 PrepPulse — Smart Interview Prep Platform

<div align="center">

![PrepPulse Banner](https://img.shields.io/badge/PrepPulse-Interview%20Prep%20Platform-black?style=for-the-badge&logo=react)

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payments-02042B?style=flat-square&logo=razorpay)](https://razorpay.com/)

> **Upload your Resume. Practice Real Interviews. Get Scored. Download Your Report.**

</div>

---

## 📌 What is PrepPulse?

PrepPulse is a full-stack **SaaS Interview Preparation Platform** built with the MERN stack. Users upload their resume, select an interview mode (HR or Technical), answer timed questions with difficulty progression, and receive a detailed performance report — all backed by a credit-based payment system.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 **Resume Upload & Parsing** | Upload PDF resume — role, skills, and projects auto-extracted |
| 🎯 **Smart Question Generation** | 5 questions generated based on your resume, role, and experience |
| ⏱️ **Timed Interview Rounds** | Each question has a time limit with difficulty progression (Easy → Hard) |
| 📊 **Performance Scoring** | Scored on Confidence, Communication & Correctness per answer |
| 📈 **Interview Report** | Visual report with charts, circular progress bars & question-wise breakdown |
| 📥 **PDF Report Download** | Download your complete scorecard as a PDF using jsPDF |
| 💳 **Credit-Based Access** | SaaS model — buy credits via Razorpay to unlock interview sessions |
| 🔐 **Google Authentication** | One-click login with Firebase Google OAuth |
| 📋 **Interview History** | Track all past interviews and performance trends |
| 🎨 **Smooth Animations** | Polished UI with Framer Motion animations throughout |

---

## 🛠️ Tech Stack

### Frontend
```
React 19          →  UI Framework
Vite              →  Build Tool
Tailwind CSS v4   →  Styling
Redux Toolkit     →  State Management
Framer Motion     →  Animations
Recharts          →  Performance Charts
React Circular Progressbar  →  Score Visualization
jsPDF + AutoTable →  PDF Report Generation
Firebase          →  Google Authentication
Axios             →  API Calls
```

### Backend
```
Node.js           →  Runtime
Express 5         →  Web Framework
MongoDB           →  Database
Mongoose          →  ODM
JWT               →  Authentication Tokens
Cookie-Parser     →  Cookie Handling
Multer            →  PDF File Upload
pdfjs-dist        →  PDF Text Extraction
OpenRouter API    →  Question Generation & Evaluation
Razorpay          →  Payment Gateway
Crypto            →  HMAC Payment Verification
```

---

## 🔄 Application Workflow

```
User Signs In (Firebase Google Auth)
        ↓
Upload Resume PDF
        ↓
Resume Parsed → Role, Skills, Projects Extracted
        ↓
Select Mode (HR / Technical) + Experience Level
        ↓
Credit Check (50 credits required per session)
        ↓
5 Timed Questions Generated (Easy → Easy → Medium → Medium → Hard)
        ↓
User Answers Each Question Within Time Limit
        ↓
Each Answer Evaluated → Confidence + Communication + Correctness Scored
        ↓
Final Score Calculated → Detailed Report Generated
        ↓
Download PDF Report  OR  View Interview History
        ↓
Buy More Credits via Razorpay (₹100 / ₹500 Plans)
```

---

## 💰 Pricing Plans

| Plan | Price | Credits | Features |
|---|---|---|---|
| **Free** | ₹0 | 100 Credits | Basic report, Voice access, Limited history |
| **Starter Pack** | ₹100 | 150 Credits | Detailed feedback, Performance analytics, Full history |
| **Pro Pack** | ₹500 | 650 Credits | Advanced feedback, Skill trend analysis, Priority processing |

> Each interview session costs **50 credits**

---

## 📁 Project Structure

```
PrepPulse/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Step1SetUp.jsx      # Resume upload & setup
│   │   │   ├── Step2Interview.jsx  # Interview Q&A with timer
│   │   │   ├── Step3Report.jsx     # Performance report & PDF
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   ├── InterviewHistory.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   └── Pricing.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   └── utils/
│   │       └── firebase.js
│   └── package.json
│
└── server/                     # Node.js Backend
    ├── config/
    │   ├── connectDb.js
    │   └── token.js
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── interview.controller.js
    │   ├── payment.controller.js
    │   └── user.controller.js
    ├── middlewares/
    │   ├── isAuth.js
    │   └── multer.js
    ├── models/
    │   ├── user.model.js
    │   ├── interview.model.js
    │   └── payment.model.js
    ├── routes/
    │   ├── auth.route.js
    │   ├── interview.route.js
    │   ├── payment.route.js
    │   └── user.route.js
    ├── services/
    │   ├── openRouter.service.js
    │   └── razorpay.service.js
    └── index.js
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Firebase project
- Razorpay account
- OpenRouter API key

### Clone the Repository
```bash
git clone https://github.com/joshiaditya256/PrepPulse.git
cd PrepPulse
```

### Server Setup
```bash
cd server
npm install
```

Create `server/.env`:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

```bash
npm run dev
```

### Client Setup
```bash
cd client
npm install
```

Create `client/.env`:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

```bash
npm run dev
```

---

## 🔗 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/google` | Google OAuth login |

### Interview
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/interview/resume` | Upload & parse resume |
| POST | `/api/interview/generate-questions` | Generate interview questions |
| POST | `/api/interview/submit-answer` | Submit & evaluate answer |
| POST | `/api/interview/finish` | Finish interview & get final score |
| GET | `/api/interview/get-interview` | Get user interview history |
| GET | `/api/interview/report/:id` | Get specific interview report |

### Payment
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/payment/order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment & add credits |

---

## 🚀 Deployment

- **Frontend** → Render (Static Site)
- **Backend** → Render (Web Service)

---

## 👨‍💻 Author

**Aditya Joshi**
- GitHub: [@joshiaditya256](https://github.com/joshiaditya256)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

*Built with ❤️ as a BTech Final Year Major Project*

</div>
