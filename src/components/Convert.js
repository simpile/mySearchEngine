import React, { useState, useEffect } from "react";
import { setCORS } from "google-translate-api-browser";

const Convert = ({ language, text }) => {
    const translate = setCORS("http://cors-anywhere.herokuapp.com/")

    const [finalText, setFinalText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setFinalText(text);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        translate(`${text}`, { to: `${language.value}` })
            .then((res) => {
                console.log(res.text);
            })
            .catch(err => {
                console.log(err);
            });
    }, [language, finalText]);

return <div>Outpou</div>;
  
    
}
export default Convert;