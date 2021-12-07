import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "../components/ImageList";
import SearchBar from "../components/SearchBar";


class PhotoEngine extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {    // its a call back function which pass like a props to the child component
        const response = await unsplash.get("/search/photos", {
            params: { query: term }
        });
        this.setState({ images: response.data.results });
        // console.log(response.data.results)
        // .then(response => console.log(response.data.results)) //firstWay
    }
    render() {
        return (
            <>
                <div className="ui container" style={{padding:12}}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    {/* <h3>   Found: {this.state.images.length} image</h3> */}
                    <ImageList images={this.state.images} />
                </div>

            </>
        );
    }

};

export default PhotoEngine;