"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AssessmentQuestionComponent from "@/components/AssementQuestion/AssessmentQuestionComponent";
import {AssessmentQuestionDetails} from "@/app/interfaces/assessment-question-details";
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {DialogActions, DialogContentText} from "@mui/material";
import {useAppContext} from "@/app/AppContext";

export default function AssessmentComponent() {

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const { setShowHome, setShowAssessment } = useAppContext();

    const assessmentQuestions: AssessmentQuestionDetails[] = [
        {
            questionNumber: 1,
            questionText: 'The first question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: true,
            onAnswerClick: () => {}
        },
        {
            questionNumber: 2,
            questionText: 'The second question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer(and correct)',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer ',
            correctAnswerNumber: 2,
            isFinalAssessment: true,
            onAnswerClick: () => {}
        },
        {
            questionNumber: 3,
            questionText: 'The third question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: true,
            onAnswerClick: () => {}
        },
        {
            questionNumber: 4,
            questionText: 'The fourth question?',
            answerOne: 'First Answer(and correct)',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer ',
            correctAnswerNumber: 1,
            isFinalAssessment: true,
            onAnswerClick: () => {}
        },
        {
            questionNumber: 5,
            questionText: 'The fifth question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: true,
            onAnswerClick: () => {}
        }
    ]

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
                {assessmentQuestions.map((question) => (
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
                                {score >=  4
                                    ? `Well done, you scored: ${score/5 * 100}%`
                                    : `Nice try, you scored: ${score/5 * 100}%`}
                            </DialogContentText>
                            <DialogContentText>
                                Final Score: {score}/5
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
