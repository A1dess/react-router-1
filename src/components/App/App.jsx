import Navbar from '../Navbar/Navbar'
import { Main, Main2, Main3 } from '../../pages'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header'

const App = () => {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Navbar/>}/>
                <Route path='/proga1' element={<Main />}/>
                <Route path='/proga2' element={<Main2 />}/>
                <Route path='/proga3' element={<Main3 />}/>  
            </Routes>
        </Router>
    </div>
  )
}

export default App