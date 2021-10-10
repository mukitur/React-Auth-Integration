import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      </AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path= "/home">
            <Home></Home>
          </Route>
          <Route path ="/register">
            <Register></Register>
          </Route>
          <Route path ="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
