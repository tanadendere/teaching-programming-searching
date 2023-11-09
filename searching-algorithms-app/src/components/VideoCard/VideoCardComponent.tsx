import React from 'react';
import {VideoCardDetails} from "@/app/interfaces/video-card-details";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from '../../styles/homepage.module.css'

export default function VideoCardComponent(videoDetails: VideoCardDetails) {
    const navigate = useNavigate();

    const coursesPage = () => {
        localStorage.setItem('videoDetails', JSON.stringify(videoDetails));
        navigate('/content')
    }
    
    let targetUrl = `http://i3.ytimg.com/vi/${videoDetails.url}/mqdefault.jpg`;
    return (
            <Card variant="outlined" style={{ minWidth: '50vh', maxWidth: '50vh', minHeight: '60vh', justifyItems: 'start'}}>
                <CardActionArea style={{height: '100%'}} onClick={coursesPage} >
                    <CardMedia 
                        component="img"
                        height="50%"
                        image={targetUrl}
                        width="50vh"
                        
                    />
                    <CardContent >
                        <Typography variant="h4" gutterBottom>
                            {videoDetails.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {videoDetails.description}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
            </Card>
    );
}