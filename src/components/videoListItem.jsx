import React from 'react';

export const VideoListItem = ({video, onSelectedVideo}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className={'list-group-item'} onClick={() => onSelectedVideo(video)}>
            <div className={'media-left'}>
                <img src={imageUrl}/>
            </div>
            <div className={'media-body'}>
                <h3>{video.snippet.title}</h3>
            </div>
        </li>
    );

};

