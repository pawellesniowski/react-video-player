import React from 'react';

import { VideoListItem } from './videoListItem';


export const VideoList = ({videos, onSelectedVideo}) => {

    const videoItems = videos.map((video)=><
        VideoListItem
            video={video}
            key={video.id.videoId}
            onSelectedVideo={onSelectedVideo}
        /> );


    return(
        <ul className={'video-list'}>
            {videoItems}
        </ul>
    );
};
