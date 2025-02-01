# BooksFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

# 📘 Angular Book Management Frontend
An Angular application to manage books and book lists, integrated with a Django REST API backend.

---

## 🚀 Features
- 📚 View available books
- 📝 Create, delete, and manage book lists
- ➕ Add & remove books from lists
- 🌐 Integrated with Django REST API
- 🎨 Utilizes Angular Material for UI components
- 🔐 CORS enabled for API communication

---

## 📂 Project Structure
/book-management-frontend │── src/ # Main source code directory │ │── app/ # Angular components, services, and modules │ │ │── components/ # UI components │ │ │── services/ # API services │ │ └── app.module.ts # Main module │ │── assets/ # Images, fonts, and other assets │ │── styles.scss # Global styles │── angular.json # Angular configuration │── package.json # NPM dependencies and scripts │── README.md # Documentation



---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/book-management-frontend.git
cd book-management-frontend
```

##2️⃣ Install Dependencies
```bash
npm install
```

3️⃣ Configure Environment
```bash
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api/'  // Django API URL
};
```



## 4️⃣ Run the Application
To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.












## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
