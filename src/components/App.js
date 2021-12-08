import React from "react";
import { Routes, Route, Link} from 'react-router-dom'
import YoutubePage from "../pages/YoutubePage";
import PhotoEngine from "../pages/PhotoEnginPage";
import Home from "../pages/HomePage";
import TranslatePage from "../pages/TranslatePage";


const App =()=> {
 
       
        return ( 
            <>
                <Link style={{ marginRight: 20 }} to='/'  >Home</Link>
                <Link style={{ marginRight: 20 }} to='/PhotoSearch' >Photo Search</Link>
                <Link style={{ marginRight: 20 }} to='/YoutubePage' >Youtube Search</Link>
                <Link to='/TranslatePage' >Translator</Link>

                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/YoutubePage' element={<YoutubePage />} />
                    <Route path='/PhotoSearch' element={<PhotoEngine />} />
                    <Route path='/TranslatePage' element={<TranslatePage/>} />
                </Routes>
            </>
        );
    }


export default App;
