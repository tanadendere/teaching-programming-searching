"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AssessmentQuestionComponent from "@/components/AssementQuestion/AssessmentQuestionComponent";
import { AssessmentQuestionDetails } from "@/app/interfaces/assessment-question-details";
import {DialogActions, DialogContentText} from "@mui/material";
import {useAppContext} from "@/app/AppContext";

export default function QuizComponent() {
    const [isHintModalOpen, setHintModalOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const { setShowHome, setShowQuiz } = useAppContext();

    const handleHintModalOpen = () => {
        setHintModalOpen(true);
    };

    const handleHintModalClose = () => {
        setHintModalOpen(false);
    };

    const quizQuestions: AssessmentQuestionDetails[] = [
        {
            questionNumber: 1,
            questionText: 'The first question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: false,
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
            isFinalAssessment: false,
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
            isFinalAssessment: false,
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
            isFinalAssessment: false,
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
            isFinalAssessment: false,
            onAnswerClick: () => {}
        }
    ]

    const quizHints = ['Q1 Hint', 'Q2 Hint', 'Q3 Hint', 'Q4 Hint', 'Q5 Hint'];

    const handleNextQuestion = () => {
        if(currentQuestion < quizQuestions.length-1){
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if(currentQuestion < quizQuestions.length){
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
    };

    const handleClose = () => {
        setShowScore(false);
        setShowHome(true);
        setShowQuiz(false);
    };


    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '40px' }}>Linear Search Quiz</h1>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <Button variant="outlined" onClick={handleHintModalOpen}>
                    Hint
                </Button>
                <Dialog open={isHintModalOpen} onClose={handleHintModalClose}>
                    <DialogTitle>Hint for the Question</DialogTitle>
                    <DialogContent>
                        {quizHints[currentQuestion]}
                    </DialogContent>
                </Dialog>
            </div>

            <AssessmentQuestionComponent
                key={quizQuestions[currentQuestion].questionNumber}
                questionNumber={quizQuestions[currentQuestion].questionNumber}
                questionText={quizQuestions[currentQuestion].questionText}
                answerOne={quizQuestions[currentQuestion].answerOne}
                answerTwo={quizQuestions[currentQuestion].answerTwo}
                answerThree={quizQuestions[currentQuestion].answerThree}
                answerFour={quizQuestions[currentQuestion].answerFour}
                correctAnswerNumber={quizQuestions[currentQuestion].correctAnswerNumber}
                isFinalAssessment={quizQuestions[currentQuestion].isFinalAssessment}
                onAnswerClick={handleAnswerClick}
            />

            { currentQuestion > 0 && currentQuestion < quizQuestions.length &&  <div style={{ marginTop: '30px' }}>
                <Button variant="contained" color="primary" onClick={handlePreviousQuestion}>
                    Previous
                </Button>
            </div>}

            { currentQuestion < quizQuestions.length - 1 && <div style={{ marginTop: '15px' }}>
                <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                    Next
                </Button>
            </div>}

            { currentQuestion === quizQuestions.length - 1 && <div style={{ marginTop: '15px' }}>
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
