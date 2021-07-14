import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Redirect,useHistory,withRouter} from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Album from './Components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/login" exact component={SignIn}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
      <Route path="/dashboard" exact component={Album}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
