import React from "react";
import YoutubeSearch from "../components/YoutubeSearchBar";
import youtubApi from "../api/youtube"
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

class YoutubePage extends React.Component {
    state = {
        videos: [],
        seleectedVideo: null,

    };

    componentDidMount(){
        this.myCallBack('virals');
    }

    // myCallBack = (term) => {
    //     youtubApi.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     });
    //     console.log(term);
    // };

    myCallBack = async term => {
        const response = await youtubApi.get(
            '/search',
            {
                params: {
                    q: term
                }
            }
        );
        //    console.log(response.data.items);
        this.setState({ videos: response.data.items,
        seleectedVideo: response.data.items[0] });

    }

    onVideoSelect = (video, myDetails) => {
        // console.log("my video",video)
        this.setState({ seleectedVideo: video })
    }

    render() {
        return (
            <>
                <div className="ui container" style={{padding:12}}>
                    <YoutubeSearch onFormSubmit={this.myCallBack} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.seleectedVideo} />
                            </div >
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>

                        </div>
                    </div>
                </div>

            </>
        );

    }
}

export default YoutubePage;