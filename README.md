<h1 align="center" id="title">Flynotify</h1>
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Seamless Flight Search: Users can readily search for flight details using a designated flight ID without login requirements.
*   Secure Admin Login: Admins can log in with proper credentials to unlock a comprehensive suite of administrative features.
*   Flight Information Management: Admins hold the power to update flight details ensuring accuracy and keeping passengers informed.
*   Passenger Management: Admins can effortlessly add new passengers to the system by providing their email addresses.
*   Comprehensive Flight Overview: Admins have a clear view of a list encompassing all flights enabling efficient management.

## Prerequisites

- Node.js and npm installed
## Installation Steps

<p>1. Clone the Repository:</p>

```
git clone https://github.com/mr-robot-007/flynotify-frontend.git
```

<p>2. Navigate to the project directory:</p>

```
cd flynotify-frontend
```

<p>3. Install Dependencies:</p>

```
npm install
```
## Configuration


```
Use the deployed backend URL
- VITE_BACKEND_URL=http://34.100.166.141:8000
If running the backend locally, use this url
- VITE_BACKEND_URL=http://127.0.0.1:8000
```
## Running the Project
```
npm run dev
```
## Folder Structure
```
flynotify-frontend
├── .firebase
├── .github/workflows
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── .env
├── .eslintrc.cjs
├── .eslintrc.json
├── .firebasesrc
├── .gitignore
├── tailwind.config.jsj
├── package.json
├── README.md
└── vite.config.js
```
## Available Scripts
```
- npm run dev: Starts the development server.
- npm run build: Builds the app for production.
- npm run preview: Previews the production build.
```
## Notes
- Make sure the backend is running and accessible at the URL specified in the .env file.
- If you encounter any CORS issues, ensure that the backend is configured to allow requests from the frontend's domain.