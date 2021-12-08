import React ,{ useState }from "react";
import Accordian from "../components/Accordian";
import DropDown from "../components/DropDown";
import WikiSearch from "../components/WikiSearch";



const Home =()=>{
    // const[selected, setSelected]=useState(options[0])
 return  ( <>
    <div className="ui container" style={{padding:12}}>
        <WikiSearch/>
    {/* <Accordian items={items}/> */}
    {/* <DropDown
    select ={selected}
    onSelectChange={setSelected}
     values={options}
     /> */}
    </div>
</>);
}
export default Home;