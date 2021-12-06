import React from "react";
import Accordian from "../components/Accordian";

const items=[
    {
        title: "hi",
        content: "bye"
    },
    {
        title: "hi1",
        content: "bye"
    }
]

const Home =()=>{
    
 return  ( <>
    <div className="ui container" style={{padding:12}}>
        <h1>Home page </h1>
    <Accordian items={items}/>
    </div>
</>);
}
export default Home;