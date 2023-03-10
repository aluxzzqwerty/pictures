import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
        <div style={{ marginBottom: '20px'}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type='text' value={this.state.term} onChange={(event) => {this.setState( {term: event.target.value} )}}></input>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;