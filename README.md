# Skill Matcher – AI Resume Screening System

Skill Matcher is a full-stack MERN application that allows users to upload resumes and compare them against job descriptions using AI-based scoring.

It provides:

- 📄 Resume upload (PDF)
- 🤖 AI-powered resume analysis
- 📊 Score & feedback generation
- 📁 Resume history tracking
- 🛠 Admin panel for global resume monitoring
- 🔐 Google authentication

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- CSS Modules
- Material UI
- React Router
- Firebase Authentication
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (PDF upload handling)
- OpenAI API

---

## 📂 Project Structure

```
skill-matcher/
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Dashboard/
│   │   │   ├── History/
│   │   │   ├── Admin/
│   │   │   ├── Login/
│   │   │   └── Sidebar/
│   │   ├── utils/
│   │   └── App.jsx
│
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── utils/
│   ├── uploads/
│   └── index.js
│
└── README.md
```

---

## ✨ Features

### 👤 User Features
- Sign in with Google
- Upload resume (PDF only)
- Paste job description
- Get AI score with detailed feedback
- View resume history

### 🛡 Admin Features
- View all uploaded resumes
- Access user details
- Monitor resume scores and feedback

---

## 🔐 Authentication

Google OAuth is implemented using Firebase.

On successful login:
- User is created/verified in backend
- Role-based access is supported (user/admin)

---

## 📄 Resume Upload

- Only PDF files allowed
- Stored using Multer
- File metadata saved in MongoDB

---

## 🤖 AI Resume Scoring

- Resume text + job description sent to OpenAI
- AI returns:
  - Score (percentage match)
  - Improvement suggestions
- Data stored in database for history tracking

---

## ⚙️ Environment Variables

### Backend `.env`

Create a `.env` file inside `/backend`:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

---

### Frontend `.env`

Create inside `/frontend`:

```
VITE_API_BASE_URL=http://localhost:4000
```

---

## 🧪 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/Shivyy247/skill-matcher.git
cd skill-matcher
```

---

### 2️⃣ Install Backend

```
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:4000
```

---

### 3️⃣ Install Frontend

Open a new terminal:

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📦 API Endpoints

### User
```
POST   /api/user
```

### Resume
```
POST   /api/resume/addResume
GET    /api/resume/get/:userId
GET    /api/resume/get      (admin only)
```

---

## 🎨 UI Design

The UI follows a clean SaaS-style aesthetic:

- Soft neutral background
- Gradient accent colors
- Elevated card layout
- Responsive grid system
- Modern typography hierarchy

---

## 🚀 Future Improvements

- Resume preview viewer
- Admin analytics dashboard
- Resume keyword highlighting
- Export feedback as PDF
- Dark mode support
- Resume comparison feature

---

## 👩‍💻 Author

**Shivani Barman**  
Engineering Student | MERN Stack Developer  

---

## 📜 License

This project is built for educational and portfolio purposes.

---

⭐ If you like this project, consider giving it a star on GitHub!
