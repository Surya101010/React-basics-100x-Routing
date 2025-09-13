
import './App.css'
import {BrowserRouter , Routes ,Route, Link} from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
      <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class-11">Class XI</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class XII</Link>
      <Routes>
        <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
        <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
        <Route path='/' element={<Landing />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

function Class11Program(){
  return <div>
    Neet Program for class XI
  </div>
}
function Class12Program(){
  return <div>
    Neet Program for class XII
  </div>
}
function Landing(){
  return <div>
  Welcome to allen
  </div>
}
export default App
