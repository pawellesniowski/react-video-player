import React from 'react';

export const VideoListItem = ({video}) => {
    console.log("video: ", video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className={'list-group-item'}>
            <div className={'media-left'}>
                <img src={imageUrl}/>
            </div>
            <div className={'media-body'}>
                <h3>{video.snippet.title}</h3>
            </div>
        </li>
    );

};

