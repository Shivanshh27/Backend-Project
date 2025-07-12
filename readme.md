# 🎬 Video Hosting Platform - Backend

A full-featured backend for a video hosting platform, built with **Node.js**, **Express**, and **MongoDB**. This service enables secure user management, video uploads, profile customization, subscriptions, and more — making it suitable for platforms like YouTube or Vimeo.

---

## 📁 Folder Structure

```
src/
├── controllers/        # Core business logic (user, video, auth, etc.)
├── db/                 # MongoDB connection setup
├── middlewares/        # Authentication, file handling (Multer), error handling
├── models/             # Mongoose schemas (User, Video, Subscription)
├── routes/             # API endpoints for users and more
├── utils/              # Helpers (API response, error class, Cloudinary config)
├── app.js              # Express app configuration
└── index.js            # Entry point – connects DB and starts server
```

---

## 🔐 Authentication & Tokens

- JWT-based access & refresh token authentication
- Tokens stored as secure HTTP-only cookies
- Automatic token refreshing endpoint
- Password change support

---

## 🚀 Features

- ✅ User Registration with avatar + cover image upload
- ✅ Login with email or username
- ✅ Logout and refresh token support
- ✅ Watch history tracking
- ✅ View channel profiles (including follower count)
- ✅ Update account info, avatar, and cover image
- ✅ Scalable modular backend with async error handling

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Auth**: JWT, Cookies
- **File Uploads**: Multer, Cloudinary
- **Utilities**: dotenv, cors, cookie-parser, async handlers

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/video-hosting-platform.git
cd video-hosting-platform
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Start the Server

```bash
npm start
```

Visit: [http://localhost:8000](http://localhost:8000)

---

## 🔌 API Endpoints (v1)

Base path: `/api/v1/users`

| Method | Endpoint           | Description                     | Auth |
| ------ | ------------------ | ------------------------------- | ---- |
| POST   | `/register`        | Register user + upload avatar   | ❌   |
| POST   | `/login`           | Login with email/username       | ❌   |
| POST   | `/logout`          | Logout user                     | ✅   |
| POST   | `/refresh-token`   | Refresh access token            | ❌   |
| POST   | `/change-password` | Change user password            | ✅   |
| GET    | `/current-user`    | Fetch logged-in user            | ✅   |
| PATCH  | `/update-account`  | Update user profile details     | ✅   |
| PATCH  | `/avatar`          | Update avatar image             | ✅   |
| PATCH  | `/cover-image`     | Update cover image              | ✅   |
| GET    | `/c/:username`     | Get channel profile by username | ✅   |
| GET    | `/history`         | Get user watch history          | ✅   |

---

## 📌 TODO / Roadmap

- [ ] Video upload and streaming endpoints
- [ ] Like & comment system
- [ ] Search and trending logic
- [ ] Admin dashboard
- [ ] Swagger/Postman API docs

---

## 🧑‍💻 Author

**Shivansh Nigam**  
[GitHub](https://github.com/your-username) • [LinkedIn](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the **MIT License**.
