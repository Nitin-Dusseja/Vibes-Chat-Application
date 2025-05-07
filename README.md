# Real-Time Chat Application(Vibes) 💬

A full-featured real-time chat application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js), featuring real-time messaging with Socket.IO, user authentication, image uploads, and a responsive UI with Material UI.

---

## 🔧 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Material UI & Emotion
- Axios
- Socket.IO Client
- Framer Motion
- Chart.js, React-Chartjs-2
- React Helmet Async
- React Hot Toast
- Moment.js

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.IO
- JWT & bcrypt (Authentication)
- Multer & Cloudinary (File Uploads)
- cookie-parser, CORS, dotenv
- express-validator
- UUID

---

## 🔐 Features

- ✅ Real-time messaging with Socket.IO
- ✅ Authentication (JWT + bcrypt)
- ✅ User registration/login with session handling
- ✅ Image upload & sharing via Cloudinary
- ✅ Typing indicators and timestamps
- ✅ Modern UI with Material UI & animations
- ✅ Toast notifications for actions
- ✅ Secure API access with CORS and cookies
- ✅ Responsive design (desktop & mobile)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Nitin-Dusseja/Vibes-Chat-Application
cd chat-app
```
```
Client/
|   .env
|   .gitignore
|   eslint.config.js
|   index.html
|   output.txt
|   package-lock.json
|   package.json
|   README.md
|   todo.txt
|   vite.config.js
|   
+---public
|       sample.jpg
|       
\---src
    |   App.jsx
    |   main.jsx
    |   socket.jsx
    |   
    +---assets
    |       Vibes.svg
    |       Vibes_lg.png
    |       Vibes_m.png
    |       Vibes_sm.png
    |       
    +---components
    |   +---auth
    |   |       ProtectRoute.jsx
    |   |       
    |   +---constants
    |   |       colors.js
    |   |       config.js
    |   |       events.js
    |   |       sampleData.js
    |   |       
    |   +---dialogs
    |   |       AddMemberDialog.jsx
    |   |       ConfirmDeleteDialog.jsx
    |   |       FileMenu.jsx
    |   |       
    |   +---layout
    |   |       AdminLayout.jsx
    |   |       AppLayout.jsx
    |   |       Header.jsx
    |   |       
    |   +---shared
    |   |       ChatItem.jsx
    |   |       MessageComponent.jsx
    |   |       RenderAttachment.jsx
    |   |       
    |   +---specific
    |   |       AvatarCard.jsx
    |   |       Charts.jsx
    |   |       ChatList.jsx
    |   |       Loader.jsx
    |   |       Loading.css
    |   |       NewGroup.jsx
    |   |       Notifications.jsx
    |   |       Profile.jsx
    |   |       Search.jsx
    |   |       Table.jsx
    |   |       UserItem.jsx
    |   |       
    |   \---styles
    |           StyledComponents.jsx
    |           
    +---hooks
    |       hook.jsx
    |       
    +---lib
    |       features.js
    |       
    +---pages
    |   |   Chat.jsx
    |   |   Groups.jsx
    |   |   Home.jsx
    |   |   Login.jsx
    |   |   NotFound.jsx
    |   |   
    |   \---admin
    |           AdminLogin.jsx
    |           ChatManagement.jsx
    |           Dashboard.jsx
    |           MessageManagement.jsx
    |           UserManagement.jsx
    |           
    +---redux
    |   |   store.js
    |   |   
    |   +---api
    |   |       api.js
    |   |       
    |   +---reducers
    |   |       auth.js
    |   |       chat.js
    |   |       misc.js
    |   |       
    |   \---thunks
    |           admin.js
    |           
    \---utils
            validators.js
            

Server/
|   .env
|   app.js
|   output.txt
|   package-lock.json
|   package.json
|   
+---constants
|       config.js
|       events.js
|       
+---controllers
|       admin.js
|       chat.js
|       user.js
|       
+---lib
|       helper.js
|       validators.js
|       
+---middlewares
|       auth.js
|       error.js
|       multer.js
|       
+---models
|       chat.js
|       message.js
|       request.js
|       user.js
|       
+---routes
|       admin.js
|       chat.js
|       user.js
|       
+---seeders
|       user.js
|       
\---utils
        features.js
        utility.js
  ```      
---
### .env (Client)
- VITE_SERVER

### .env (Server)
- MONGODB_URI
- JWT_KEY="(*^*(&(*)^(&*^*&^@()&@!LNASLBKJASBN!123123123@#@@#)))"

- ADMIN_SECRET_KEY

- NODE_ENV = DEVELOPMENT

- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
