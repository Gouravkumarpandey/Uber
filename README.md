# Uber

A full-stack ride-sharing application built with MERN stack that replicates core Uber functionalities.

## 🌟 Key Features

- **Authentication**
  - User & Captain signup/login
  - JWT-based authentication
  - Protected routes

- **Real-time Features**
  - Live location tracking
  - Real-time ride status updates
  - Socket.io integration
  - Live fare estimation

- **Ride Management**
  - Multiple vehicle types
  - Automated fare calculation
  - Route visualization
  - OTP verification

## 🛠️ Tech Stack

### Frontend
- **React** (Vite) - UI framework
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Socket.io-client** - Real-time communication
- **Axios** - HTTP client
- **React Router DOM** - Navigation
- **Context API** - State management

### Backend
- **Node.js** & **Express.js** - Server
- **MongoDB** & **Mongoose** - Database
- **Socket.io** - Real-time events
- **JWT** - Authentication
- **Bcrypt** - Password hashing

## 📁 Project Structure
```
uber/
├── Frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── context/            # Context providers
│   │   ├── pages/             # Route components
│   │   └── App.jsx           # Main app component
│   ├── vite.config.js
│   └── package.json
│
└── Backend/
    ├── controllers/           # Route controllers
    ├── models/               # Database models
    ├── routes/              # API routes
    ├── services/           # Business logic
    ├── middlewares/       # Custom middlewares
    └── server.js         # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- MongoDB
- Git

### Backend Setup
```bash
# Navigate to backend
cd Backend

# Install dependencies
npm install

# Create .env file
echo "PORT=4000
DB_CONNECT=mongodb://localhost:27017/uber
JWT_SECRET=your-secret-key" > .env

# Start server
npm start
```

### Frontend Setup
```bash
# Navigate to frontend
cd Frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_BASE_URL=http://localhost:4000" > .env

# Start development server
npm run dev
```

## 🔌 Socket Events

```javascript
// User events
socket.emit('join', { userType: 'user', userId })
socket.on('ride-confirmed', (rideData) => {})
socket.on('ride-started', (rideData) => {})

// Captain events
socket.emit('join', { userType: 'captain', userId })
socket.emit('update-location-captain', locationData)
socket.on('new-ride', (rideData) => {})
```

## 🔒 API Endpoints

### User Routes
```
POST /users/register     # Register new user
POST /users/login       # Login user
GET  /users/profile     # Get user profile
GET  /users/logout      # Logout user
```

### Captain Routes
```
POST /captains/register # Register captain
POST /captains/login    # Login captain
GET  /captains/profile  # Get captain profile
GET  /captains/logout   # Logout captain
```

### Ride Routes
```
POST /rides/create      # Create new ride
GET  /rides/get-fare   # Get fare estimate
```

## 💻 Development Commands

```bash
# Frontend
npm run dev            # Start development server
npm run build          # Build for production
npm run lint          # Run ESLint

# Backend
npm start            # Start server
npm run dev         # Start with nodemon
```

## 🔐 Environment Variables

### Backend (.env)
```
PORT=3000
DB_CONNECT=mongodb://localhost:27017/uber
JWT_SECRET=your-secret-key
```

### Frontend (.env)
```
VITE_BASE_URL=http://localhost:4000
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/Amazing`)
3. Commit changes (`git commit -m 'Add Amazing Feature'`)
4. Push to branch (`git push origin feature/Amazing`)
5. Open a Pull Request

## 📝 License

This project is MIT licensed.

##  Author

 Gourav Kumar Pandey(https://github.com/Gouravkumarpandey)
