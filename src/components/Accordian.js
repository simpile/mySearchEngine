import React, {useState} from "react";



const Accordian = ({ items}) => {
    const [activeIndex , setActiveIndex]= useState(null)
    const onTitleClick=(index)=>{
        setActiveIndex(index);
        // console.log(index)
    }
    const renderItem = items.map(
        
        ( item, index) => {
           const activeClass = index === activeIndex   ? "active": "";
        
            return (
                <React.Fragment 
                key={item.titles}>
                    <div
                onClick={()=>onTitleClick(index)} 
                className={`title ${activeClass}`}
                >
                <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${activeClass}`}>
                      <p>{item.content}</p>  
                    </div>
                </React.Fragment >
            );
        }
    )
    return (
        <div  className=" ui styled accordion">{renderItem}
        {/* {activeIndex} */}
        </div >

    );
}

export default Accordian