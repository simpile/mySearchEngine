import React from "react";
import Accordian from "../components/Accordian";
import WikiSearch from "../components/WikiSearch";

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
        <WikiSearch/>
    {/* <Accordian items={items}/> */}
    </div>
</>);
}
export default Home;