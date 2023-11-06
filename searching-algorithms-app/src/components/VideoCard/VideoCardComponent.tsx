import React from 'react';
import {VideoCardDetails} from "@/app/interfaces/video-card-details";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function VideoCardComponent({url, title, summary}: VideoCardDetails) {
    return (
        <div>
            <Card variant="outlined" style={{ maxWidth: 300, margin: 10 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {summary}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}