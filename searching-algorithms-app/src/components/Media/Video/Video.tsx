import * as React from 'react';
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
export default function Video() {
    return (
        <div>
            <Card component="li" sx={{ minWidth: 300, minHeight: '40vh', flexGrow: 1 }} >
                <CardCover>
                    <video
                        controls
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
                {/* <CardContent>
                    <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor="#fff"
                        mt={{ xs: 12, sm: 18 }}
                    >
                        Video
                    </Typography>
                </CardContent> */}
            </Card>
        </div>

    );
}