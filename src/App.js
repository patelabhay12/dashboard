import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Pages/Homep/Home';
import Login from './Pages/Loginp/Login';
import List from './Pages/Listp/List';
import Single from './Pages/Singlep/Single';
import New from './Pages/Newp/New';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={ <List/> } />
              <Route path=':userId' element={ <Single/> } />
              <Route path='new' element={ <New/> } />
            </Route>
            <Route path='products'>
              <Route index element={ <List/> } />
              <Route path=':pId' element={ <Single/> } />
              <Route path='new' element={ <New/> } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


