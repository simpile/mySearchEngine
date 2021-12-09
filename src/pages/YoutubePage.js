import React, {useState , useEffect} from "react";
import YoutubeSearch from "../components/YoutubeSearchBar";
import youtubApi from "../api/youtube"
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";


export default function YoutubePage() {
    const[video, setVideo]=useState([]);
    const[selectedVideo, setSelectedVideo]= useState(null);

    useEffect(()=>{myCallBack('virals');},[])// just once rendering becuse of []

   const myCallBack = async term => {
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
        setVideo(response.data.items);                      //FUNCTIONALCOMPONENT 
        setSelectedVideo( response.data.items[0])

    }
    const onVideoSelect = (video) => {
       setSelectedVideo (video);
    }

    return (
        <div>
            <div className="ui container" style={{padding:12}}>
                    <YoutubeSearch onFormSubmit={myCallBack} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={selectedVideo} />
                            </div >
                            <div className="five wide column">
                                <VideoList onVideoSelect={onVideoSelect} videos={video} />
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}
