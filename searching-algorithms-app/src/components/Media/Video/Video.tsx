import * as React from 'react';
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { VideoCardDetails } from '@/app/interfaces/video-card-details';

export default function Video( videoDetails: VideoCardDetails, onChange: (arg0: any) => void) {
    console.log(videoDetails.url);
    
    let targetUrl = `https://www.youtube.com/embed/${videoDetails.url}`;

    const handleChange = (event: { target: { value: any; }; }) => {
        onChange(event.target.value)
    };

    return (
        <div>
            <Card component="li" sx={{ minWidth: 300, minHeight: '40vh', flexGrow: 1 }} >
                <CardCover>
                    <iframe src={targetUrl} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </CardCover>
            </Card>
        </div>

    );
}