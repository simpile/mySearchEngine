import React ,{ useState }  from "react";
import Convert from "../components/Convert";
import DropDown from "../components/DropDown";
const options=[
    {
        lable: "African",
        value: "af"
    },
    {
        lable: "Arabic",
        value: "ar"
    },
    {
        lable: "English",
        value: "en"
    }
  
]
const TranslatePage =()=>{
    const[language, setLanguage]=useState(options[0]);
    const [text, setText]= useState("");


 return  ( <>
<div className="ui form">
<div className="field">
    <label className="label">  enter your words  </label>

<input
value={text}
onChange={(e)=>{setText(e.target.value)}}
/>

</div>
</div>

<DropDown   
    option={options}
    select ={language}
    onSelectChange={setLanguage}
     />
     <hr/>
     <Convert text={text} language={language}/>
</>);
}
export default TranslatePage;