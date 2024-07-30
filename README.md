<h1 align="center" id="title">Flynotify</h1>
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Seamless Flight Search: Users can readily search for flight details using a designated flight ID without login requirements.
*   Secure Admin Login: Admins can log in with proper credentials to unlock a comprehensive suite of administrative features.
*   Flight Information Management: Admins hold the power to update flight details ensuring accuracy and keeping passengers informed.
*   Passenger Management: Admins can effortlessly add new passengers to the system by providing their email addresses.
*   Comprehensive Flight Overview: Admins have a clear view of a list encompassing all flights enabling efficient management.

## Screenshots
![Screenshot 2024-07-30 221849](https://github.com/user-attachments/assets/64348ef0-37f2-4690-a867-f2aeffe8aefd)
![Screenshot 2024-07-30 221917](https://github.com/user-attachments/assets/3b789aee-daab-4b10-861e-86137aa1485f)

![Screenshot 2024-07-30 222028](https://github.com/user-attachments/assets/278f2c9b-d5ec-4de8-89c0-b9d6af0057a5)
![Screenshot 2024-07-30 222039](https://github.com/user-attachments/assets/88ab5769-2d4e-4ba6-a487-fee6203b6b7e)

![Screenshot 2024-07-30 222046](https://github.com/user-attachments/assets/b8505baa-de0e-4760-b107-de761fd2cafd)
![Screenshot 2024-07-30 222111](https://github.com/user-attachments/assets/ea60ee30-6d41-40fd-9e97-e62aebeb10e8)

![Screenshot 2024-07-30 222913](https://github.com/user-attachments/assets/e1014923-533f-4fb6-8b86-6dd371dd0336)
![Screenshot 2024-07-30 230211](https://github.com/user-attachments/assets/93f67c87-bfda-4943-a24a-6df56d3cb079)


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

## Backend Repo
https://github.com/mr-robot-007/flynotify-backend

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