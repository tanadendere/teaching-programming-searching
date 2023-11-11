"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AssessmentQuestionComponent from "@/components/AssementQuestion/AssessmentQuestionComponent";
import {AssessmentQuestionDetails, AssessmentData} from "@/app/interfaces/assessment-question-details";
import {DialogActions, DialogContentText} from "@mui/material";
import {useAppContext} from "@/app/AppContext";
import {
    linearQuizQuestions,
    linearQuizHints,
    linearQuizData,
    binaryQuizData, hashingQuizData
} from "@/app/resources/system-data/quiz-data";
import {useNavigate} from "react-router-dom";
import {VideoCardDetails} from "@/app/interfaces/video-card-details";

export default function QuizComponent() {
    const [isHintModalOpen, setHintModalOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const {
        setShowHome, setShowQuiz, algorithmType,
        setLinearQuizCompleted, setBinaryQuizCompleted, setHashingQuizCompleted
    } = useAppContext();

    const details_string = localStorage.getItem('videoDetails') || ''
    const videoDetails: VideoCardDetails = JSON.parse(details_string)

    let quizData: AssessmentData = {
        quizQuestions: [],
        quizHints: []
    };

    let QuizType = '';

    if(videoDetails.type === 'linear'){
        quizData = linearQuizData;
        QuizType = 'Linear';
    }
    else if(videoDetails.type === 'binary'){
        quizData = binaryQuizData
        QuizType = 'Binary';
    }
    else if(videoDetails.type === 'hashing'){
        quizData = hashingQuizData;
        QuizType = 'Hashing'
    }

    const navigate = useNavigate();

    const handleHintModalOpen = () => {
        setHintModalOpen(true);
    };

    const handleHintModalClose = () => {
        setHintModalOpen(false);
    };

    const handleNextQuestion = () => {
        if(currentQuestion < quizData.quizQuestions.length-1){
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if(currentQuestion < quizData.quizQuestions.length){
            setCurrentQuestion(prevQuestion => prevQuestion - 1);
        }
    };
    const handleAnswerClick = (selectedAnswerNumber: number, correctAnswerNumber: number) => {
        if (selectedAnswerNumber === correctAnswerNumber) {
            setScore(score + 1);
        }

    };

    const handleComplete = () => {
        setShowScore(true);


        if(videoDetails.type === 'linear'){
            setLinearQuizCompleted(true)
            localStorage.setItem('linearQuizCompleted', 'true');
        }
        else if(videoDetails.type === 'binary'){
            setBinaryQuizCompleted(true)
            localStorage.setItem('binaryQuizCompleted', 'true');
        }
        else if(videoDetails.type === 'hashing'){
            setHashingQuizCompleted(true)
            localStorage.setItem('hashingQuizCompleted', 'true');
        }

    };

    const handleClose = () => {
        setShowScore(false);
        setShowHome(true);
        setShowQuiz(false);
    };

    const handleBackHome = () => {
        navigate('/');
    };


    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '40px' }}>{QuizType} Search Quiz</h1>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <Button variant="outlined" onClick={handleHintModalOpen}>
                    Hint
                </Button>
                <Dialog open={isHintModalOpen} onClose={handleHintModalClose}>
                    <DialogTitle>Hint for the Question</DialogTitle>
                    <DialogContent>
                        {quizData.quizHints[currentQuestion]}
                    </DialogContent>
                    <DialogContent>
                        <strong><i>* Click anywhere outside the popup to close it</i></strong>
                    </DialogContent>
                </Dialog>
            </div>

            <AssessmentQuestionComponent
                key={quizData.quizQuestions[currentQuestion].questionNumber}
                questionNumber={quizData.quizQuestions[currentQuestion].questionNumber}
                questionText={quizData.quizQuestions[currentQuestion].questionText}
                answerOne={quizData.quizQuestions[currentQuestion].answerOne}
                answerTwo={quizData.quizQuestions[currentQuestion].answerTwo}
                answerThree={quizData.quizQuestions[currentQuestion].answerThree}
                answerFour={quizData.quizQuestions[currentQuestion].answerFour}
                correctAnswerNumber={quizData.quizQuestions[currentQuestion].correctAnswerNumber}
                isFinalAssessment={quizData.quizQuestions[currentQuestion].isFinalAssessment}
                onAnswerClick={handleAnswerClick}
            />

            { currentQuestion > 0 && currentQuestion < quizData.quizQuestions.length &&  <div style={{ marginTop: '30px' }}>
                <Button variant="contained" color="primary" onClick={handlePreviousQuestion}>
                    Previous
                </Button>
            </div>}

            { currentQuestion < quizData.quizQuestions.length - 1 && <div style={{ marginTop: '15px' }}>
                <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                    Next
                </Button>
            </div>}

            { currentQuestion === quizData.quizQuestions.length - 1 && <div style={{ marginTop: '15px' }}>
                <Button variant="contained" color="primary" onClick={handleComplete}>
                    Complete Quiz
                </Button>
            </div>}

            {showScore && (
                <div style={{ marginTop: '30px' }}>
                    <Dialog open={showScore} onClose={handleClose}>
                        <DialogTitle>
                            <div>
                                <strong>Quiz Complete!</strong>
                            </div>
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                {score >  4
                                    ? `Well done, you scored: ${score/5 * 100}%`
                                    : `Nice try, you scored: ${score/5 * 100}% - Consider revising the content a bit more before tackling the final assessment`}
                            </DialogContentText>
                            <DialogContentText>
                                Final Score: {score}/5
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleBackHome} variant="contained" color="primary">
                                Return Home
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )}
        </div>
    );
}
