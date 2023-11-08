import * as React from 'react';
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";
import { useNavigate } from "react-router-dom";

import styles from '../../styles/homepage.module.css';

export default function HomePageComponent() {
    const videos = [
        {
            id: 1,
            videoUrl: 'Mno9uoYgghE',
            heading: 'Video 1',
            summary: 'Summary of Video 1 content.',
        },
        {
            id: 2,
            videoUrl: 'O24DIhigKBQ',
            heading: 'Video 2',
            summary: 'Summary of Video 2 content.',
        },
        {
            id: 3,
            videoUrl: 'iUH_KTPdEYg',
            heading: 'Video 3',
            summary: 'Summary of Video 3 content.',
        },
    ];

    return (
        <div>
            <h1> Searching Algorithm System</h1>
            <div className={styles.pageItems}>
                {videos.map((video) => (
                    <VideoCardComponent key={video.id} url={video.videoUrl} title={video.heading} summary={video.summary} />
                ))}
            </div>
        </div>

    );
}