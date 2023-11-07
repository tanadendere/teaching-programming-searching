"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AssessmentQuestionComponent from "@/components/AssementQuestion/AssessmentQuestionComponent";
import { AssessmentQuestionDetails } from "@/app/interfaces/assessment-question-details";

export default function QuizComponent() {
    const [isHintModalOpen, setHintModalOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0); // State to track the current question

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
            correctAnswerNumber: 4
        },
        {
            questionNumber: 2,
            questionText: 'The second question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer(and correct)',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer ',
            correctAnswerNumber: 2
        },
        {
            questionNumber: 3,
            questionText: 'The third question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4
        },
        {
            questionNumber: 4,
            questionText: 'The fourth question?',
            answerOne: 'First Answer(and correct)',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer ',
            correctAnswerNumber: 1
        },
        {
            questionNumber: 5,
            questionText: 'The fifth question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4
        }
    ]

    const quizHints = ['Q1 Hint', 'Q2 Hint', 'Q3 Hint', 'Q4 Hint', 'Q5 Hint'];

    const handleNextQuestion = () => {
        if(currentQuestion < quizQuestions.length-1){
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        }

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
            />

            <div style={{ marginTop: '30px' }}>
                <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                    Next
                </Button>
            </div>
        </div>
    );
}
