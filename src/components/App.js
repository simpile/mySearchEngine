import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import { Routes, Route, Link } from 'react-router-dom'
import YoutubePage from "../pages/YoutubeSearch";
import Home from "./Home";

class PhotoSearch extends React.Component {
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
                <div style={{ margin: 10, }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <h3>   Found: {this.state.images.length} image</h3>
                    <ImageList images={this.state.images} />
                </div>

            </>
        );
    }

};

class App extends React.Component {
    // state = {
    //     images: []
    // };

    // onSearchSubmit = async (term) => {    // its a call back function which pass like a props to the child component
    //     const response = await unsplash.get("/search/photos", {
    //         params: { query: term }
    //     });
    //     this.setState({ images: response.data.results });
    //     // console.log(response.data.results)
    //     // .then(response => console.log(response.data.results)) //firstWay
    // }
    render() {
        return (
            <>
                {/* <Home/> */}
                {/* //         <div style={{ margin: 10, }}>
    //             <SearchBar onSubmit={this.onSearchSubmit} />
    //          <h3>   Found: {this.state.images.length} image</h3>
    //              <ImageList images={this.state.images}/>            
    //         </div> */}

                <Link style={{ marginRight: 20 }} to='/'  >Home</Link>
                <Link style={{ marginRight: 20 }} to='/PhotoSearch' >PhotoSearch</Link>
                <Link to='/YoutubePage' >youtube page</Link>





                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/PhotoSearch' element={<PhotoSearch />} />
                    <Route path='/YoutubePage' element={<YoutubePage />} />
                </Routes>
            </>
        );
    }

};
export default App;
