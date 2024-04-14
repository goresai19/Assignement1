import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignup';




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/signin' element={<UserSignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
