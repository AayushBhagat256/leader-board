import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Tab1 from './components/Tab1'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';
import Sponcers from './components/Sponcers';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Sponcers/>
        <div className="paths">
          <div className="path1 mx-1"><Link to="/tab1"><button type="button" class="btn btn-dark">All Teams</button></Link></div>
          <div className="path2 mx-1"><Link to="/tab2"><button type="button" class="btn btn-dark">House 1</button></Link></div>
          <div className="path3 mx-1"><Link to="/tab3"><button type="button" class="btn btn-dark">House 2</button></Link></div>
          <div className="path4 mx-1"><Link to="/tab4"><button type="button" class="btn btn-dark">House 3</button></Link></div>
          <div className="path5 mx-1"><Link to="/tab5"><button type="button" class="btn btn-dark">House 4</button></Link></div>
        
      </div>
      <div className="containerr1 mx-0">
        <Routes>
          <Route path='/tab1' element={<Tab1/>}/>
        </Routes>
        <Routes>
          <Route path='/tab2' element={<Tab2/>}/>
        </Routes>
        <Routes>
          <Route path='/tab3' element={<Tab3/>}/>
        </Routes>
        <Routes>
          <Route path='/tab4' element={<Tab4/>}/>
        </Routes>
        <Routes>
          <Route path='/tab5' element={<Tab5/>}/>
        </Routes>
      </div>

      
      
    </div>
    </Router>
  )
}

export default App
