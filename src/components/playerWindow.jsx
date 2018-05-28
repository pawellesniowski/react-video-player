import React from 'react';

export const PlayerWindow = ({video}) => {

    if(!video) {
        return <div>Loading...</div>
    }

    const {videoId} = video.id;
    const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <div className={'embed-responsive'}>
            <iframe src={url}></iframe>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    );
};

