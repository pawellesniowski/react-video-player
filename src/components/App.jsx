import React, { Component } from 'react';

import { SearchBar } from './searchBar';
import { PlayerWindow } from './playerWindow';
import { VideoList } from './videoList';

import youtubeSearch from 'youtube-api-v3-search';
import _ from 'lodash';
import { API_KEY } from '../consts/API';


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: ''
        };
        this.handleSetSearchTerm('grupmy sheep')
    }

    lazyHandleSetSearchTerm = _.debounce(this.handleSetSearchTerm, 1000)

    handleSetSearchTerm(searchTerm){
        youtubeSearch(API_KEY, { q: searchTerm })
            .then((data)=>{
                this.setState({
                    videos: data.items,
                    selectedVideo: data.items[0],
                    searchTerm
                });
            });
    }

    render() {
        return(
            <div>
                <SearchBar
                    setSearchTerm={(searchTerm) => this.lazyHandleSetSearchTerm(searchTerm)}
                />
                <PlayerWindow video={this.state.selectedVideo}/>
                <VideoList
                    onSelectedVideo={(selectedVideo)=> this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
