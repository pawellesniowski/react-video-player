import React, {Component} from 'react';

export class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { term: '' }
    }

    handleInputChange(term){
        this.setState({term});
        this.props.setSearchTerm(term);
    }

    render() {
        return (
            <div>
                <input
                    type={"text"}
                    onChange={(e) => this.handleInputChange(e.target.value)}
                    value={this.state.term}
                />
            </div>
        );
    }

}
