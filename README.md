# React Custom Hooks - Assignment 5

## 🚀 Deployed Link
**Live Demo:** https://hooks-react-custom.netlify.app/

## 📋 Description
A custom React hook (`useFetch`) that simplifies the process of fetching data from APIs. This project demonstrates the implementation of a reusable hook with loading and error state management.

## ✨ Features
- Custom `useFetch` hook for API data fetching
- Automatic loading state handling
- Comprehensive error handling
- Displays product data from API
- Clean and responsive UI
- Built with React functional components

## 🛠️ Technologies Used
- React.js
- JavaScript (ES6+)
- Custom Hooks (useState, useEffect, useCallback)
- CSS for styling
- Fetch API

## 📦 API Used
This project fetches data from: `https://api.escuelajs.co/api/v1/products`

## 🎯 Custom Hook Features
The `useFetch` hook returns:
- `data`: The fetched data from the API
- `loading`: Boolean indicating loading state
- `error`: Any error that occurred during fetch

## 💻 Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/alokgupta2306/react-custom-hooks.git
```

2. Navigate to project directory
```bash
cd react-custom-hooks
```

3. Install dependencies
```bash
npm install
```

4. Run the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📁 Project Structure
```
src/
├── hooks/
│   └── useFetch.js          # Custom fetch hook
├── components/
│   └── ProductList.js       # Component using the hook
├── App.js                   # Main application component
└── index.js                 # Entry point
```

## 🎓 Assignment Requirements Met
✅ Custom hook named `useFetch`  
✅ Accepts URL parameter  
✅ Returns data, loading, and error states  
✅ Uses useState, useEffect, and useCallback  
✅ Component implementation with styling  
✅ Deployed on Netlify  
✅ GitHub repository  

## 👨‍💻 Author
Alok kumar Gupta

## 📝 License
This project is open source and available under the MIT License.
