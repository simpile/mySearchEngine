import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordian from './Accordian';

const WikiSearch = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    console.log(result)
    useEffect(() => {
        // console.log(term);
        const request = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term, //state
                }
            });
            setResult(data.query.search);
        }
        //FOR STOP SEARCHING IMIDEATLY

        if (term && !result.length) {
            request();
        } else {
            const timeOutId = setTimeout(() => { if (term) { request(); } }, 1000);
            return () => { clearTimeout(timeOutId); };
        }

    }, [term]);



    const mapAndRender = result.map((item) => {
        return (
            <div key={item.pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        className="ui button">read more..</a>
                </div>
                <div className="cotent">
                    <div className="header">
                        <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                </div>
            </div>
            // <>
            // <Accordian title={item.title}  content={item.snippet}/>
            // </>
        );
    })
    return (
        <>
            <div className="ui segment" style={{padding:12}}>
                <form className=" ui form">
                    <div className="field">
                    <label htmlFor="myInput"> WikiPedia Search</label>
                    <input
                        value={term}
                        onChange={(e) => { setTerm(e.target.value) }}
                        name="myInput" type="text"  />
                        </div>
                </form>
            </div>
            <div className="ui called list">
                {mapAndRender}
            </div>
        </>
    );
}

export default WikiSearch;