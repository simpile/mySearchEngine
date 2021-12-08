import React, { useState, useEffect, useRef } from "react";


const DropDown = ({ option, select, onSelectChange }) => {
    const [open, setOpen] = useState(false); //USESTATE
    const ref = useRef();                     // USEREF
    // useEffect(() => {
    //     document.body.addEventListener('click', (e) => {
    //         if (ref.current.contains(e.target)) {
    //            return}
    //         setOpen(false);
    //     });
    // }, []);

    const mapAndRender = option.map((item) => {
        return (
            <div
                key={item.value}
                className="item"
                onClick={() => onSelectChange(item)}
            >
                {item.lable}
            </div>

        );
    });
    if (option.value === select.value) {
        return null;
    }

    return (
        <div
            className="ui form">
            <div className="field">
                <label className="label">select language </label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{select.lable}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{mapAndRender}</div>
                </div>
            </div>
        </div>
    );
}
export default DropDown;