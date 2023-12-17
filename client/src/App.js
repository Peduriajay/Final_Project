/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPg from "./pages/LoginPg";
import RegisterPg from "./pages/RegisterPg";
import{UserContextProvider} from "./UserContext";

function App() {
  return (
    <Routes>
      <Route path="/"element={<Layout />}>
       <Route index element={ <IndexPage />}/>
        <Route path='/login' element ={<LoginPg />}/>
        <Route path='/register' element ={<RegisterPg />}/>
      </Route>
     </Routes>
        

   
  );
}

export default App;
