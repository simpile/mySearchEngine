import React from "react";
import { Routes, Route, Link} from 'react-router-dom'
import YoutubePage from "../pages/YoutubePage";
import PhotoEngine from "../pages/PhotoEnginPage";
import Home from "../pages/HomePage";


const App =()=> {
 
       
        return ( 
            <>
                <Link style={{ marginRight: 20 }} to='/'  >Home</Link>
                <Link style={{ marginRight: 20 }} to='/PhotoSearch' >PhotoSearch</Link>
                <Link to='/YoutubePage' >youtube page</Link>

                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/YoutubePage' element={<YoutubePage />} />
                    <Route path='/PhotoSearch' element={<PhotoEngine />} />
                </Routes>
            </>
        );
    }


export default App;
