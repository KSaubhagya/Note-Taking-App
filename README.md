# Note-Taking-App

A simple Note Taking Application built with **Angular** for the frontend and **.NET Web API** for the backend.  
This app allows users to create and delete notes — running locally without needing a seperate database.

---

## 🚀 Features

- ✨ Add new notes with a title and content  
- 🗑️ Delete existing notes instantly  
- 🎨 Beautiful and responsive UI  
- ⚡ Fast local backend powered by .NET  
- 🌐 Frontend served using Angular  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | Angular 18+, TypeScript, HTML, CSS |
| Backend | .NET 9 Web API |
| IDE | Visual Studio Code |
| Package Manager | npm for frontend, dotnet CLI for backend |

---

## 📂 Project Structure

```plaintext
Note-Taking-App/
│
├── backend/               
│   ├── Controllers/
│   │   └── NotesController.cs
│   ├── Models/
│   │   └── Note.cs
│   ├── Program.cs
│   ├── Properties/
│   └── NoteTakingApp.csproj
│
├── frontend/              
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/note-list/
│   │   │   │   ├── note-list.component.ts
│   │   │   │   ├── note-list.component.html
│   │   │   │   └── note-list.component.css
│   │   │   ├── models/note.model.ts
│   │   │   └── services/note.service.ts
│   ├── angular.json
│   └── package.json
│
└── README.md
```
---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/Note-Taking-App.git
cd Note-Taking-App
```

### 2️⃣ Backend Setup (.NET)
```bash
cd backend
dotnet restore
dotnet run
```
The backend will start at: http://localhost:5204


### 3️⃣ Frontend Setup (Angular)
```bash
cd frontend
npm install
ng serve
```
The frontend will start at: http://localhost:4200
