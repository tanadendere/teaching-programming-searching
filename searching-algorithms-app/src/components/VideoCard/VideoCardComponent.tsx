import React from 'react';
import {VideoCardDetails} from "@/app/interfaces/video-card-details";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function VideoCardComponent(videoDetails: VideoCardDetails) {
    const navigate = useNavigate();

    const coursesPage = () => {
        localStorage.setItem('videoDetails', JSON.stringify(videoDetails));
        navigate('/content')
    }
    
    let targetUrl = `http://i3.ytimg.com/vi/${videoDetails.url}/mqdefault.jpg`;
    return (
            <Card variant="outlined" style={{ maxWidth: '50vh' }}>
                <CardActionArea onClick={coursesPage}>
                    <CardMedia 
                        component="img"
                        height="140"
                        image={targetUrl}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {videoDetails.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {videoDetails.summary}
                        </Typography>
                    </CardContent>
                    
                </CardActionArea>
            </Card>
    );
}