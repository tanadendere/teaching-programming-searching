import * as React from 'react';
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";
import { useNavigate } from "react-router-dom";

import styles from '../../styles/homepage.module.css';
import _lessons from '@/app/resources/lessons.json';
import { VideoCardDetails } from '@/app/interfaces/video-card-details';

export default function HomePageComponent() {
    const videos: VideoCardDetails[] = _lessons

    return (
        <div>
            <div style={{padding: '10px',  textAlign: 'center'}}>
                <h1> Searching Algorithm System</h1>
            </div>
            
            <div className={styles.pageItems}>
                {videos.map((video, i) => (
                    <VideoCardComponent key={i} 
                        url={video.url} 
                        title={video.title} 
                        description={video.description} 
                        text={video.text} 
                    />
                ))}
            </div>
        </div>

    );
}