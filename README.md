# Quiz_Angular 🎯

**Quiz_Angular** is the frontend of a full-stack **Online Quiz Application**.  
It is developed using **Angular** to provide an interactive user experience with features like authentication, dynamic quizzes, a timer, and detailed score results.  

The application consumes REST APIs from the backend service:  
👉 [Quiz_BackEnd Repository](https://github.com/ramkumbhre/Quiz_BackEnd.git)  

Deployed at: [Live Demo](https://quiz-angular-system.vercel.app/login)

---

## 📌 Overview

The goal of this project is to provide an engaging platform where users can log in, attempt quizzes, track progress, and view their scores in real time.  
This frontend communicates with the backend via REST APIs for user authentication, quiz questions, and result storage.

---

## ✨ Features

- 🔐 **Authentication & Authorization** – User login flow integrated with backend APIs.  
- 📝 **Dynamic Quiz Management** – Fetches quizzes and questions from backend.  
- ✅ **Answer Validation** – Real-time feedback on correct and incorrect answers.  
- ⏱️ **Timer Functionality** – Questions are time-bound to simulate real exam scenarios.  
- 📊 **Score Calculation & Results** – Users can see total scores and detailed results after completing the quiz.  
- 📱 **Responsive UI** – Mobile-first design with Angular and SCSS.  
- 🚀 **Fast Performance** – Optimized with Angular CLI and lazy loading.  

---

## 🛠️ Tech Stack

- **Frontend Framework:** Angular 17+  
- **Programming Language:** TypeScript  
- **Markup & Styling:** HTML5, SCSS  
- **State & Data Handling:** Angular Services, RxJS  
- **Build Tooling:** Angular CLI, Webpack  
- **Deployment:** Vercel  

---

## 📂 Project Structure

Quiz_Angular/

├── src/

│ ├── app/

│ │ ├── components/ # Reusable UI components (quiz-card, timer, navbar)

│ │ ├── pages/ # Page-level components (login, quiz, result, dashboard)

│ │ ├── services/ # API services (auth.service.ts, quiz.service.ts)

│ │ ├── models/ # Interfaces & types for data handling

│ │ ├── guards/ # Route guards for authentication

│ │ └── app.module.ts

│ ├── assets/ # Images, icons, static resources

│ ├── environments/ # environment.ts & environment.prod.ts

│ ├── index.html # Root HTML

│ └── styles.scss # Global styles

├── angular.json

├── package.json

├── tsconfig.json

└── README.md


---

## ⚙️ Installation & Setup

1. Clone repo:
   ```bash
   git clone https://github.com/ramkumbhre/Quiz_Angular.git
   cd Quiz_Angular

2. Install dependencies:
npm install

3. Start dev server:
ng serve

Open http://localhost:4200

🔄 Workflow

* Login – Users log in via authentication API.

* Start Quiz – Quizzes are fetched dynamically from backend.

* Answer Questions – User selects answers within time limit.

* View Results – Results summary & score shown after submission.

* Logout / Retake – User can retry or logout.



