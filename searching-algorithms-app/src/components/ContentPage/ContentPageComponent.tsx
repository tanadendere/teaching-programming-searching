import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Video from "@/components/Media/Video/Video";
import TopicContentComponent from "@/components/TopicContent/TopicContentComponent";
import ButtonComponent from "@/components/Button/ButtonComponent";
import Button from "@mui/joy/Button";
import VideoDescriptionComponent from "@/components/Media/VideoDescription/VideoDescription";
import QuizComponent from "@/components/Quiz/QuizComponent";
import { useNavigate } from "react-router-dom";
import { VideoCardDetails } from '@/app/interfaces/video-card-details';

import styles from '../../styles/contentpage.module.css'

export default function ContentPageComponent() {
    const topicTitle = 'Linear Search';
    const topicSummary: string = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim varius nibh, ut tristique leo facilisis quis. Ut at tellus sed nulla mattis tempor. Mauris quis lectus ligula. Pellentesque id lectus non enim suscipit gravida eu vel nisl. Donec dolor lacus, faucibus nec cursus quis, bibendum non nisl. Maecenas pretium egestas nisl, vitae tempor urna tempor nec. Donec leo neque, efficitur vitae arcu et, blandit tristique justo. Duis pellentesque id ex sit amet semper. Etiam dictum, massa fringilla finibus rhoncus, turpis justo fermentum purus, et egestas purus massa non quam. Praesent egestas pharetra rutrum. Sed tempus mauris vel placerat cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`;

    const details_string = localStorage.getItem('videoDetails') || ''
    const videoDetails: VideoCardDetails = JSON.parse(details_string);

    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/')
    }

    const handleQuizButton = () => {
        navigate('');
    }

    return (
        <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList>
                <Tab>Video</Tab>
                <Tab>Text</Tab>
            </TabList>
            <TabPanel value={0}>
                <ButtonComponent
                    className='homeButton'
                    text='Back Home' 
                    alignment='left'
                    buttonEvent={handleHomeButton}/>
                <div style={{paddingTop: '10px', height: '80vh'}}>
                    <Video
                        {...videoDetails} />
                    <TopicContentComponent title={videoDetails.title} summary={videoDetails.description}/>
                </div>
                <ButtonComponent 
                    className={styles.quizButton}
                    text='Start Quiz' 
                    alignment='center'
                    buttonEvent={handleQuizButton}/>
            </TabPanel>
            <TabPanel value={1}>
                <ButtonComponent 
                    className='homeButton'
                    text='Back Home' 
                    alignment='left'
                    buttonEvent={handleHomeButton}/>
                <div style={{paddingTop: '10px'}}>
                    <VideoDescriptionComponent/>
                </div>
                <ButtonComponent 
                    className={styles.quizButton}
                    text='Start Quiz' 
                    alignment='center'
                    buttonEvent={handleQuizButton}/>
            </TabPanel>
        </Tabs>
    );
}