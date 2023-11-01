import React from 'react';

interface CardProps {
    topic: string;
    videoUrl: string;
    onStartQuiz: () => void;
}

const Card: React.FC<CardProps> = ({ topic, videoUrl, onStartQuiz }) => {
    return (
        <div className="topic-card">
            <h2>{topic}</h2>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title={`Video for ${topic}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <button>Start Quiz</button>
        </div>
    );
};

export default Card;
