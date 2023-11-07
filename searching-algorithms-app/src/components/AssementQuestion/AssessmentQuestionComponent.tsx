"use client";
import React from 'react';
import {AssessmentQuestionDetails} from "@/app/interfaces/assessment-question-details";

import styles from '../../styles/quiz.module.css'

export default function AssessmentQuestionComponent({questionNumber, questionText, answerOne, answerTwo, answerThree, answerFour, correctAnswerNumber}: AssessmentQuestionDetails) {

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <div>
                <h2>Question {questionNumber}</h2>
                <p style={{ marginTop: '15px', marginBottom: '15px' }}>
                    {questionText}
                </p>
            </div>

            <div className={styles.answerCard}>
                <button className={styles.answerButton}>{answerOne}</button>
                <button className={styles.answerButton}>{answerTwo}</button>
            </div>

            <div className={styles.answerCard}>
                <button className={styles.answerButton}>{answerThree}</button>
                <button className={styles.answerButton}>{answerFour}</button>
            </div>

        </div>
    );
}
