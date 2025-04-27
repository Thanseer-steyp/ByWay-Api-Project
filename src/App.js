import './App.css';
import HomePage from './components/pages/HomePage';
import CoursePage from './components/pages/CoursePage';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/course/:id' element={<CoursePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;