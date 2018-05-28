import React from 'react';

import { VideoListItem } from './videoListItem';


export const VideoList = (props) => {

    const videoItems = props.videos.map((video)=><VideoListItem video={video} key={video.id.videoId}/> );

    return(
        <ul className={'video-list'}>
            {videoItems}
        </ul>
    );
};
