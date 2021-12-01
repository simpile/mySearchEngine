import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };
    seOnCHange =(e)=>{

    this.setState({ term: e.target.value });
}
    onInputSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term); // it's a callback function which useing in parrent component
    }
    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onInputSubmit}
                    className=" ui form">
                    <div className="field">
                        <label for="myInput">Image Search</label>
                        <input
                            name="myInput"
                            type="text"
                            value={this.state.term}
                            onChange={
                                // e => this.setState({ term: e.target.value })
                                this.seOnCHange
                            }
                        />
                    </div>
                </form>
            </div>

        );

    }
}
export default SearchBar;
