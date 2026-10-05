# PRODIGY_FS_05 - Social Media Platform
 
Full Stack Development Internship - Task 05 at Prodigy Infotech.
 
A social media web application where users can create profiles,
share posts with images or videos, like and comment, tag posts,
follow other users, get notifications and explore trending tags.
 
## Features- Register and login (passwords hashed, JWT authentication)- User profile with bio and profile picture- Create posts with text, image or video and tags- Like and unlike posts- Comment on posts- Follow and unfollow users- Notifications for likes, comments and follows- Trending tags and tag based search- Delete your own posts
 
## Tech Stack- Frontend: HTML, CSS, JavaScript- Backend: Node.js, Express- Database: MongoDB (Atlas) with Mongoose- Auth: JSON Web Tokens, bcryptjs- Uploads: Multer
 
## How to run locally
1. Clone the repo:  git clone https://github.com/[YOUR-USERNAME]/PRODIGY_FS_05.git
2. Go inside:  cd PRODIGY_FS_05
3. Install packages:  npm install
4. Create a .env file (copy .env.example) and fill in your values
5. Start:  npm run dev
6. Open http://localhost:5000
 
## Environment variables
PORT, MONGO_URI, JWT_SECRET  (see .env.example)
