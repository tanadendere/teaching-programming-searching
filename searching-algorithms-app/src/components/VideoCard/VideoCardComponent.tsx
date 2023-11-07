import React from 'react';
import {VideoCardDetails} from "@/app/interfaces/video-card-details";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function VideoCardComponent({url, title, summary}: VideoCardDetails) {
    return (
        <div>
            <Card variant="outlined" style={{ minWidth: '50vh', maxWidth: '50vh', margin: '10px', padding: '5vh' }}>
                <CardActionArea>
                    <Typography variant="h4" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {summary}
                    </Typography>
                </CardActionArea>
            </Card>
        </div>
    );
}