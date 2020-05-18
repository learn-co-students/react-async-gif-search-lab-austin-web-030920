import React, { Component } from 'react';

class GifSearch extends Component {
    constructor() {
        super();
    
        this.state = {
            search: ""
        }
    }

    handleInput = (e) => {
        this.setState({search: e.target.value})
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={(e) => this.props.onSubmit(e, this.state.search)}>
                    <input onChange={this.handleInput} type="text" value={this.state.search}/>
                    <input type="Submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default GifSearch;
