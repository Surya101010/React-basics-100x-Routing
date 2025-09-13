
import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
function App() {

  return (
    <>
    Allen| Class 11 | Class 12
      <BrowserRouter>
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
