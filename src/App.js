import './App.css';
import React, { useEffect,useState } from 'react';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import CoursePage from './components/pages/CoursePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const UserContext = React.createContext();

function App() {
  const [userData, setUserData] = useState({});
  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setUserData(null);
        localStorage.clear();
        break;
      case "LOGIN":  
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user_data")))
  }, []);
  return (
    <>
      <UserContext.Provider value={{userData, updateUserData}}>
        <Router>
          <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
