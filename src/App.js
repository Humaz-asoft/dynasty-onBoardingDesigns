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
import Step7 from './components/Step/Step7';
import Step8 from './components/Step/Step8';
import Step9 from './components/Step/Step9';
import Step10 from './components/Step/Step10';
import Step11 from './components/Step/Step11';
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
				<Route exact path="/step7" element={<Step7/>}/>
				<Route exact path="/step8" element={<Step8/>}/>
				<Route exact path="/step9" element={<Step9/>}/>
				<Route exact path="/step10" element={<Step10/>}/>
				<Route exact path="/step11" element={<Step11/>}/>
				
			</Routes>
			<Footer/>
		</BrowserRouter>
  );
}

export default App;
