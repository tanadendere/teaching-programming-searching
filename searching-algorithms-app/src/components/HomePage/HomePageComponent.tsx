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

    const handleAssessmentButton = () => {
        navigate('/assessment');
    }

    return (
        <div>
            <div className={styles.header}>
                <h1>Learn2Search</h1>
            </div>

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