//   the useEffect and myCallBack can be use in other places of this project 
    //  so we make a coustum hook for using it again(reusable codes)=> the point is:
    // 1-we should have at least one hook in our costum hook(1main hook)
    // 2- our coustum hook can do only one work
    // تعیین کردن کدهای هم هدف -1
    //تعیین ورودی(چیزی که دستی وارد میشه) -2
    //تعیین خروجی -3
    // جمع کردن تمام اطلاعات و استفاده از آن -4
    // ساخت پوشه ی هوک - 
    // فایلهای هئوک را با پسوند یوز ذخیره میکنیم(useVideos.js) -
    //ایمپورت کردن هوکهای اصلی(useState, useEffect)

import {useState, useEffect} from 'react'
import youtubApi from "../api/youtube"

function useVideo(defSearchTerm) {
    const[video, setVideo]=useState([]);
    useEffect(()=>{searches(defSearchTerm);},[defSearchTerm])// jits my custom hook
    const searches = async term => {
        const response = await youtubApi.get(
            '/search',
            {
                params: {
                    q: term
                }
            }
        );
   
        // this.setState({ videos: response.data.items,     //CLASSCOMPONENT VS.
        // seleectedVideo: response.data.items[0] });
        setVideo(response.data.items);   
        
       };  
        return[video,searches ]
};

export default useVideo;
