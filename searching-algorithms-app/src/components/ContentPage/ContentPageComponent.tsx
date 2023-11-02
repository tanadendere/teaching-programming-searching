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


export default function ContentPageComponent() {
    var videoLink = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    return (
        <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList>
                <Tab>Video</Tab>
                <Tab>Text</Tab>
            </TabList>
            <TabPanel value={0}>
                <Video />
                <TopicContentComponent/>
                <ButtonComponent/>
            </TabPanel>
            <TabPanel value={1}>
                <VideoDescriptionComponent/>
                <ButtonComponent/>
            </TabPanel>
        </Tabs>
    );
}