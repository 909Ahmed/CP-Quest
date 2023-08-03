import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Code from './components/Code';
import Verify from './components/Verify';
import SaveState from './context/questions/savestate';
import Saved from './components/Saved';
import Home from './components/Home';


import {
  BrowserRouter,
  Route,  
  Routes
} from "react-router-dom";
import Account from './components/Account';

{document.body.style.backgroundColor = '#F5F5DC'}

function App() {
  return (
    <>

      <SaveState>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home key="home"/>}></Route>
              <Route exact path="/account" element={<Account key="account"/>}></Route>
              <Route exact path="/problems" element={<Code tag="" title="General" key="gen"/>}></Route>
              <Route exact path="/problems/brute" element={<Code tag="brute force" title="Brute force" key="brute"/>}></Route>
              <Route exact path="/problems/data" element={<Code tag="data structures" title="Data structures" key="data"/>}></Route>
              <Route exact path="/problems/implementation" element={<Code tag="implementation" title="Implementation" key="imp"/>}></Route>
              <Route exact path="/problems/maths" element={<Code tag="math" title="Maths" key="math"/>}></Route>
              <Route exact path="/problems/greedy" element={<Code tag="greedy" title="Greedy" key="greedy"/>}></Route>
              <Route exact path="/problems/sortings" element={<Code tag="sortings" title="Sortings" key="sorting"/>}></Route>
              <Route exact path="/problems/games" element={<Code tag="games" title="Games" key="games"/>}></Route>
              <Route exact path="/problems/constructive" element={<Code tag="constructive algorithms" title="Constructive Algorithms" key="con"/>}></Route>
              <Route exact path="/problems/interactive" element={<Code tag="interactive" title="Interactive" key="int"/>}></Route>
              <Route exact path="/problems/graphs" element={<Code tag="graphs" title="Graphs" key="graphs"/>}></Route>
              <Route exact path="/problems/trees" element={<Code tag="trees" title="Trees" key="trees"/>}></Route>
              <Route exact path="/problems/strings" element={<Code tag="strings" title="Strings" key="strings"/>}></Route>
              <Route exact path="/problems/binary" element={<Code tag="binary search" title="Binary Search" key="binary"/>}></Route>
              <Route exact path="/problems/bitmasks" element={<Code tag="bitmasks" title="Bitmasks" key="bitmasks"/>}></Route>
              <Route exact path="/problems/dp" element={<Code tag="dp" title="Dynamic programming" key="dp"/>}></Route>
              <Route exact path="/saved" element={<Saved title="Saved problems" key="saved"/>}></Route>
              <Route exact path='/login' element={<Verify go="login" key="login"/>}></Route>
              <Route exact path='/sign' element={<Verify go="sign" key="signup"/>}></Route>
            </Routes>
          </BrowserRouter>
        </SaveState>
    </>
  );
}

export default App;
