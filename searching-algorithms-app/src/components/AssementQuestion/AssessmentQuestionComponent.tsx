"use client";
import React, {useState} from 'react';
import {AssessmentQuestionDetails} from "@/app/interfaces/assessment-question-details";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import styles from '../../styles/quiz.module.css'

export default function AssessmentQuestionComponent({questionNumber, questionText, answerOne, answerTwo, answerThree, answerFour, correctAnswerNumber, isFinalAssessment, onAnswerClick}: AssessmentQuestionDetails) {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [openFeedback, setOpenFeedback] = useState(false);

    const determineButtonClass = (answerNumber: any) => {
        if (selectedAnswer === answerNumber) {
            return styles.selectedAnswer;
        }
        return '';
    };

    const handleAnswerClick = (answerNumber: any) => {
        setSelectedAnswer(answerNumber);
        setOpenFeedback(true);

        onAnswerClick(answerNumber, correctAnswerNumber);
    };

    const handleClose = () => {
        setOpenFeedback(false);
        setSelectedAnswer(null);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <div>
                <h2>Question {questionNumber}</h2>
                <p style={{ marginTop: '15px', marginBottom: '15px' }}>{questionText}</p>
            </div>

            <div className={styles.answerCard}>
                <button className={`${styles.answerButton} ${determineButtonClass(1)}`} onClick={() => handleAnswerClick(1)}>
                    {answerOne}
                </button>
                <button className={`${styles.answerButton} ${determineButtonClass(2)}`} onClick={() => handleAnswerClick(2)}>
                    {answerTwo}
                </button>
            </div>

            <div className={styles.answerCard}>
                <button className={`${styles.answerButton} ${determineButtonClass(3)}`} onClick={() => handleAnswerClick(3)}>
                    {answerThree}
                </button>
                <button className={`${styles.answerButton} ${determineButtonClass(4)}`} onClick={() => handleAnswerClick(4)}>
                    {answerFour}
                </button>
            </div>

            {!isFinalAssessment && (
                <Dialog open={openFeedback} onClose={handleClose}>
                    <DialogTitle>
                        {selectedAnswer === correctAnswerNumber && (
                            <div style={{ color: 'green' }}>
                                <strong>Correct Answer!</strong>
                            </div>
                        )}
                        {selectedAnswer !== correctAnswerNumber && (
                            <div style={{ color: 'red' }}>
                                <strong>Wrong Answer. Try Again!</strong>
                            </div>
                        )}
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            {selectedAnswer === correctAnswerNumber
                                ? 'Well done! You selected the correct answer.'
                                : 'Oops! You selected the wrong answer. Please try again.'}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained" color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );

}
