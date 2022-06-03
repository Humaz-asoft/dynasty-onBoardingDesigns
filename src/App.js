import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Step1 from "./components/Step/Step1"
import Step2 from "./components/Step/Step2"
import Step3 from "./components/Step/Step3"
import Welcome from './components/Welcome/Welcome';
import Step4 from './components/Step/Step4';
import Step5 from './components/Step/Step5';
import Step6 from './components/Step/Step6';
function App() {
  return (
    <BrowserRouter>
		<Header/>
			<Routes>
			
				<Route exact path="/" element={<Welcome/>}/>
				<Route exact path="/step1" element={<Step1/>}/>
				<Route exact path="/step2" element={<Step2/>}/>
				<Route exact path="/step3" element={<Step3/>}/>
				<Route exact path="/step4" element={<Step4/>}/>
				<Route exact path="/step5" element={<Step5/>}/>
				<Route exact path="/step6" element={<Step6/>}/>
				
			</Routes>
			<Footer/>
		</BrowserRouter>
  );
}

export default App;
