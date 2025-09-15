
import { React, useRef } from 'react';
import './App.css'
import {BrowserRouter , Routes ,Route, Link, useNavigate, Outlet} from 'react-router-dom';
function App() {
  const inputref = useRef();
  function fun(){
    inputref.current.focus();
  }
  return(
    <>
      <input ref={inputref} type='text' placeholder='Enter the user name'></input>
      <button onClick={fun}>Focus</button>
    </>
  )
  // return (
  //   <>
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Layout />}>
  //         <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
  //         <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
  //         <Route path='/' element={<Landing />} />
  //         <Route path='*' element={<ErrorPage />} />
  //       </Route>
  //     </Routes>
  //     </BrowserRouter>
  //   </>
  // )
}
// function Layout(){
//   return <div style={{height:"100vh"}}>
//     <Header />
//       <div style={{height:"90vh",backgroundColor:"grey"}}>
//         <Outlet />
//       </div>
//       footer
//   </div>
// }
// function Header(){
//   return<div><Link to="/">Allen</Link>
//       |
//       <Link to="/neet/online-coaching-class-11">Class XI</Link>
//       |
//       <Link to="/neet/online-coaching-class-12">Class XII</Link>
//       </div>
// }
// function ErrorPage(){
//   return <div style={{backgroundColor:"red",textAlign:"center",justifyContent:"center", padding:"4px"}}>
//     Error 404 PAGE Not found
//   </div>
// }
// function Class11Program(){
//   return <div>
//     Neet Program for class XI
//   </div>
// }
// function Class12Program(){
//   const navigate = useNavigate();
//   function redirect(){
//     navigate("/");
//   }
//   return <div>
//     Neet Program for class XII
//     <div><button onClick={redirect}>Go back to Landing</button>
//   </div>
//     </div>
// }
// function Landing(){
//   return <div>
//   Welcome to allen
//   </div>
// }
export default App
