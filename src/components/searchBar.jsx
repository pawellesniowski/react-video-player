import React, { Component } from 'react';

export class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    handleInputOnChange(e) {
        this.setState({term: e.target.value})
    }

    render() {
        return (
            <div>
                <input
                    type={"text"}
                    onChange={this.handleInputOnChange}
                    value={this.state.value}
                />
            </div>
        );
    }

}