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
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                    </div>
                    <a
                        href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        className={`content ui  ${activeClass}`}>read more..</a>
                </React.Fragment >
            );
        }
    )
    return (
        <div  className=" ui styled accordion" style={{width:"100%"}}>{renderItem}
        {/* {activeIndex} */}
        </div >

    );
}

export default Accordian