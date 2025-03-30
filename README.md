# Uber Clone Project

A full-stack application that replicates core Uber functionalities using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Structure

```
uber-clone/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
└── Backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── services/
    ├── middlewares/
    └── server.js
```

## Features

- User Authentication (Signup/Login)
- Captain Authentication (Signup/Login)
- Real-time Location Tracking
- Ride Booking System
- Fare Estimation
- Live Ride Status Updates
- Socket.io Integration for Real-time Communication

## Technologies Used

### Frontend
- React.js (with Vite)
- Tailwind CSS
- Socket.io-client
- Axios
- React Router DOM
- GSAP for animations
- RemixIcon
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- Socket.io
- bcrypt for password hashing
- Express Validator
- Cookie Parser
- CORS

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Backend Setup
1. Navigate to the backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```env
PORT=3000
DB_CONNECT=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with:
```env
VITE_BASE_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

## API Documentation

### User Routes
- POST `/users/register` - Register new user
- POST `/users/login` - User login
- GET `/users/profile` - Get user profile
- GET `/users/logout` - Logout user

### Captain Routes
- POST `/captains/register` - Register new captain
- POST `/captains/login` - Captain login
- GET `/captains/profile` - Get captain profile
- GET `/captains/logout` - Logout captain

### Map Routes
- GET `/maps/get-coordinates` - Get coordinates from address
- GET `/maps/get-distance-time` - Get distance and time between locations
- GET `/maps/get-suggestions` - Get location suggestions

### Ride Routes
- POST `/rides/create` - Create new ride
- GET `/rides/get-fare` - Get fare estimate

## Main Dependencies

### Frontend Dependencies
```json
{
  "@gsap/react": "^2.1.2",
  "axios": "^1.8.3",
  "gsap": "^3.12.7",
  "react": "^19.0.0",
  "react-router-dom": "^7.3.0",
  "remixicon": "^4.6.0",
  "socket.io-client": "^4.8.1",
  "tailwindcss": "^3.4.17"
}
```

### Backend Dependencies
```json
{
  "bcrypt": "^5.1.1",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "express": "^4.21.2",
  "express-validator": "^7.2.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.9.5",
  "socket.io": "^4.8.1"
}
```

## Features in Detail

### User Features
- User registration and authentication
- Book rides
- Real-time ride tracking
- View ride history
- Multiple vehicle type options
- Fare estimation
- Live driver location tracking

### Captain Features
- Captain registration and authentication
- Accept/Reject rides
- Update location in real-time
- View ride details
- Complete rides
- View earnings

## Socket.io Events

- `join` - When user/captain connects
- `update-location-captain` - Real-time captain location updates
- `new-ride` - When a new ride is created
- `ride-confirmed` - When captain accepts ride
- `ride-started` - When ride begins
- `ride-ended` - When ride completes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
