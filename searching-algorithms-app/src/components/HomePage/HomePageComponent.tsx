import * as React from 'react';
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";

import styles from '../../styles/homepage.module.css';

export default function HomePageComponent() {
    const videos = [
        {
            id: 1,
            videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
            heading: 'Video 1',
            summary: 'Summary of Video 1 content.',
        },
        {
            id: 2,
            videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
            heading: 'Video 2',
            summary: 'Summary of Video 2 content.',
        },
        {
            id: 3,
            videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
            heading: 'Video 3',
            summary: 'Summary of Video 3 content.',
        },
        {
            id: 4,
            videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
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