# 📞 MakeContactApp

A simple and intuitive web application to manage your contacts, including favorite contacts, using Firebase for data storage. Built with React and Redux, this app allows you to view, add, search, and delete contacts, making it easy to keep your contact information organized.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Tech Stack](#-tech-stack)
- [⚙️ Installation](#️-installation)
- [🔧 Configuration](#-configuration)
- [📖 Usage](#-usage)
- [📂 Folder Structure](#-folder-structure)
- [📦 Dependencies](#-dependencies)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

- **Add Contact**: Add new contacts with essential information like name, surname, phone number, and profile picture.
- **View Contacts**: View all saved contacts and favorite contacts in a responsive table format.
- **Delete Contacts**: Easily delete contacts from your list.
- **Search Contacts**: Search for contacts by name or phone number.
- **Favorite Contacts**: Mark contacts as favorites for quick access.
- **Firebase Integration**: Stores contacts data in Firebase Realtime Database.
- **Redux State Management**: Manages global state for a smooth data flow.
- **Loading Indicators**: Shows loading messages while data is being fetched.
- **Error Notifications**: Displays error messages for failed actions.

---

## 🚀 Tech Stack

- **Frontend**:

  - [React](https://reactjs.org/) - Component-based JavaScript library for building UIs.
  - [Redux](https://redux.js.org/) - State management for managing global app state.
  - [React Router](https://reactrouter.com/) - Routing for page navigation.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  - [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Notifications and alerts.

- **Backend & Database**:
  - [Firebase Realtime Database](https://firebase.google.com/products/realtime-database) - Backend-as-a-Service for storing contacts in real-time.
  - [Firebase Authentication](https://firebase.google.com/products/auth) - Authentication (optional, if needed in future).

---

## Live Demo

- Check out live demo of the project : [Here](https://praveen-makecontactapp-redux-firebase.netlify.app/)

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/praveen00219/redux-firebase-react-project.git

   cd <directoryName>
   npm install
   ```

## 🔧 Configuration

### Set up Firebase:

-Create a Firebase Realtime Database and add your project details.
-Enable database rules to read/write.
-Go to Project Settings and get your Firebase Config.

**Add Firebase Config:**

-Create a .env file in the project root.
-Add your Firebase configuration variable

```bash
    REACT_APP_API_KEY=your_api_key
    REACT_APP_AUTH_DOMAIN=your_auth_domain
    REACT_APP_DATABASE_URL=your_database_url
    REACT_APP_PROJECT_ID=your_project_id
    REACT_APP_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_APP_ID=your_app_id

  npm run dev
```

## 📦 Dependencies

- React: UI Library
- Redux: State management for efficient global state handling
- Firebase: Realtime Database for storing contacts
- React Router: For page navigation
- React Toastify: For notifications
- Tailwind CSS: For styling

  Install all dependencies using npm install.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for more details.

👤 Author: Praveen
📧 Connect: https://www.linkedin.com/in/praveen219/
