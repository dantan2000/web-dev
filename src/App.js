import {BrowserRouter, Route, Routes}
  from "react-router-dom";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/home-screen"



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello"
            exact={true}
            element={<HelloWorld/>}/>
          <Route path="/"
            exact={true}
            element={<Labs/>}/>
          <Route path="/tuiter"
            exact={true}
            element={<Tuiter/>}>
            <Route index
                   element={<HomeScreen/>}/>
                   { /*
            <Route path="explore"
                   element={<ExploreScreen/>}/>
            <Route path="notifications" 
                   element={<NotificationScreen/>}/>
              */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
