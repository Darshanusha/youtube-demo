import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
    state = { searchText: "" }
    render() {
        return (
            <div className = "form-inline">
                <div className="md-form mt-4">
                    <input className="form-control" value={this.state.searchText} onChange={(e) => this.setState({ searchText: e.target.value })} name="searchBox" type="text" placeholder="Search Videos" aria-label="Search" autoComplete="off" />
                    <button className="btn btn-primary mt-1" onClick={() => this.props.onSubmit(this.state.searchText)} >Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;