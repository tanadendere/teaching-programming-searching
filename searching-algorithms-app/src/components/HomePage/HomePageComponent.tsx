import * as React from 'react';
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "@/components/Button/ButtonComponent";
import styles from "@/styles/homepage.module.css";
import _lessons from '@/app/resources/lessons.json';
import { VideoCardDetails } from '@/app/interfaces/video-card-details';

export default function HomePageComponent() {
    const videos: VideoCardDetails[] = _lessons

    const navigate = useNavigate();

    const videos = [
        {
            id: 1,
            videoUrl: 'Mno9uoYgghE',
            heading: 'Video 1',
            summary: 'Summary of Video 1 content.',
            type: 'linear'
        },
        {
            id: 2,
            videoUrl: 'O24DIhigKBQ',
            heading: 'Video 2',
            summary: 'Summary of Video 2 content.',
            type: 'binary'
        },
        {
            id: 3,
            videoUrl: 'iUH_KTPdEYg',
            heading: 'Video 3',
            summary: 'Summary of Video 3 content.',
            type: 'hashing'
        },
    ];
    const handleAssessmentButton = () => {
        navigate('/assessment');
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>Learn2Search</h1>
            </div>

            <h1> Searching Algorithm System</h1>
            <ButtonComponent
                className={styles.quizButton}
                text='Start Final Assessment'
                alignment='center'
                buttonEvent={handleAssessmentButton}/>
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