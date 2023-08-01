import './App.css'
import HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Signin';
const App = () => {
    return (

        <BrowserRouter>

            <div className="App">
                <NavBar />
                <div id="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/Singin" element={<SignIn/>}/>
                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App; 