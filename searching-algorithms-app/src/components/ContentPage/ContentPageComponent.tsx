import { useEffect, useState, lazy } from 'react';
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

// import LessonMarkdown from "@/app/resources/linear_search.mdx"

import styles from '../../styles/contentpage.module.css'



export default function ContentPageComponent() {
    const details_string = localStorage.getItem('videoDetails') || ''
    const videoDetails: VideoCardDetails = JSON.parse(details_string)

    const LessonMarkdown = lazy(() => import(`@/app/resources/${videoDetails.text}`))
    // const [markdownContent, setMarkdownContent] = useState("");

    // useEffect(() => {
    //     fetch(lessonContent)
    //     .then((res) => res.text())
    //     .then((text) => {setMarkdownContent(text); console.log(text)})
    // }, [])


    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate('/')
    }

    const handleQuizButton = () => {
        navigate('/quiz');
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
                    <LessonMarkdown />
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