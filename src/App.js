import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NavbarTop from './pages/Navbar/Navbar';
import CarsDetails from './pages/CarsDetails/CarsDetails';
import AddCars from './pages/addCars/AddCars';
function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  
  return (
    <BrowserRouter>
    <NavbarTop/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path='/login'>{ user ? <HomePage/> : <LoginPage/>}</Route>
        <Route exact path="/register">{user ? <HomePage/> : <RegisterPage/> }</Route>
        <Route exact path="/cars_details/:_id"><CarsDetails/></Route>
        <Route exact path="/add_cars" component={AddCars}/>
        <Route exact path="/cars_details/:_id"><CarsDetails/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
