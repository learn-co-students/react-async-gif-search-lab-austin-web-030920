import React, { Component } from 'react';

class GifList extends Component {
    renderGifs = () => (
        this.props.gifs.map(gif => <li><img src={gif.images.original.url} alt='gif'></img></li>)
        // this.props.gifs.map(gif => console.log(gif.images.original.url))
    )
    
    render() {
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        );
    }
}

export default GifList;
