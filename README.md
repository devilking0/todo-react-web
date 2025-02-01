# To-Do App (React + Redux)

## Overview
This is a simple **To-Do List** web application built using **React** and **Redux**. It allows users to **add, update, and remove tasks** with a smooth user experience, including a blurred pop-up for editing tasks.

## Features
✅ Add new tasks with a single click or by pressing **Enter**.  
✅ Remove tasks instantly.  
✅ Edit tasks using a **pop-up modal with a blurred background**.  
✅ Responsive design with Tailwind CSS.  
✅ State management using **Redux Toolkit**.  

## Tech Stack
- **React** (Functional Components, Hooks)
- **Redux Toolkit** (State Management)
- **Tailwind CSS** (Styling & Responsive UI)

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/todo-react-redux.git
   cd todo-react-redux
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Start the Development Server**
   ```sh
   npm start
   ```
4. Open **http://localhost:3000** in your browser.

## Folder Structure
```
📂 src
 ┣ 📂 components
 ┃ ┣ 📜 ToDo.js       # Main To-Do Component
 ┃ ┗ 📜 Filter.js     # Category Filter (if applicable)
 ┣ 📂 Redux
 ┃ ┗ 📜 Slice.js      # Redux slice for state management
 ┣ 📜 App.js          # Root Component
 ┣ 📜 index.js        # Entry Point
 ┗ 📜 styles.css      # Custom Styles
```

## Usage
- **Adding a Task:** Type a task in the input box and click **Add Task** or press **Enter**.
- **Editing a Task:** Click **Edit**, modify the text in the pop-up, then click **Update**.
- **Deleting a Task:** Click the **Delete** button next to a task.

## Screenshots
![To-Do App Screenshot](https://via.placeholder.com/800x400.png?text=To-Do+App+UI)

## Future Enhancements
🚀 **Persistent Storage (LocalStorage or Firebase)**  
🚀 **Task Prioritization (High, Medium, Low)**  
🚀 **Drag-and-Drop Sorting**  

## Contributing
Feel free to contribute by **opening issues** or **submitting pull requests**.

## License
This project is licensed under the **MIT License**.

---
🎯 **Happy Coding!** 🚀

