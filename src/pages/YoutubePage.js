import React from "react";
import YoutubeSearch from "../components/YoutubeSearchBar";
import youtubApi from "../api/youtube"
import VideoList from "../components/VideoList";

class YoutubePage extends React.Component {
state ={ videos:[]};
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
            this.setState({videos:response.data.items });

    }

    render() {
        return (
            <>
                <div>
                    <h1>welcome to youtobe</h1>
                    <YoutubeSearch onFormSubmit={this.myCallBack} />
                    {/* i have {this.state.videos.length} videos */}
                    <VideoList videos={this.state.videos}/>
                </div>

            </>
        );

    }
}

export default YoutubePage;