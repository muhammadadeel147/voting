import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import LoginSection from './components/LoginSection';
import FaceMatchLogin from './components/FaceMatchLogin';
import {Route,Routes,} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Adminlogin';
import PageLoader from './core/FullPageLoader';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.scss';
import SignUpForm from './components/SignUpForm';
function App() {
  return (
    <div className="App">

<PageLoader/>
    <Routes>
  <Route path="/" element={ <HomeSection/>} />
  <Route path="/user-login" element={<LoginSection/>} />
  <Route path="/signup" element={<SignUpForm/>} />
  <Route path="/admin-login" element={<Login/>} />
    <Route path="/facematch" element={<FaceMatchLogin/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    
      </Routes>
    </div>
  );
}

export default App;
