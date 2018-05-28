import React, { Component } from 'react';

import { SearchBar } from './searchBar';
import { PlayerWindow } from './playerWindow';
import { VideoList } from './videoList';

import youtubeSearch from 'youtube-api-v3-search';
import { API_KEY } from '../consts/API';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [] };
        youtubeSearch(API_KEY, { q: 'grumpy cat' })
            .then((data)=>{
                console.log(data.items);
                this.setState({videos: data.items});
            });
    }

    render() {
        return(
            <div>
                <SearchBar />
                <PlayerWindow video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
