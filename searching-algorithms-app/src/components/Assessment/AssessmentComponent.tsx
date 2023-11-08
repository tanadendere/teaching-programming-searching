"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AssessmentQuestionComponent from "@/components/AssementQuestion/AssessmentQuestionComponent";
import {AssessmentData, AssessmentQuestionDetails} from "@/app/interfaces/assessment-question-details";
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {DialogActions, DialogContentText} from "@mui/material";
import {useAppContext} from "@/app/AppContext";

export default function AssessmentComponent({quizQuestions, quizHints}: AssessmentData) {

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const { setShowHome, setShowAssessment } = useAppContext();

    const handleAnswerClick = (selectedAnswerNumber: number, correctAnswerNumber: number) => {
        if (selectedAnswerNumber === correctAnswerNumber) {
            setScore(score + 1);
        }
    };

    const handleSubmit = () => {
        setShowScore(true);
    };

    const handleClose = () => {
        setShowScore(false);
        setShowHome(true);
        setShowAssessment(false);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '40px' }}> Searching Final Assessment </h1>

            <div>
                {quizQuestions.map((question) => (
                    <AssessmentQuestionComponent
                        key={question.questionNumber} questionNumber={question.questionNumber}
                        questionText={question.questionText} answerOne={question.answerOne} answerTwo={question.answerTwo}
                        answerThree={question.answerThree} answerFour={question.answerFour} correctAnswerNumber={question.correctAnswerNumber}
                        isFinalAssessment={question.isFinalAssessment}
                        onAnswerClick={handleAnswerClick}
                    />
                ))}
            </div>

            <div style={{ marginTop: '30px' }}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>

            {showScore && (
                <div style={{ marginTop: '30px' }}>
                    <Dialog open={showScore} onClose={handleClose}>
                        <DialogTitle>
                            <div>
                                <strong>Assessment Complete!</strong>
                            </div>
                        </DialogTitle>

                        <DialogContent>
                            <DialogContentText>
                                {score >=  8
                                    ? `Well done, you scored: ${score/10 * 100}%`
                                    : `Nice try, you scored: ${score/10 * 100}%`}
                            </DialogContentText>
                            <DialogContentText>
                                Final Score: {score}/10
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                Return to Home Page
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )}
        </div>
    );
}
