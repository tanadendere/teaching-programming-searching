"use client";
import React from 'react';
import {AssessmentQuestionDetails} from "@/app/interfaces/assessment-question-details";

export default function AssessmentQuestionComponent({questionNumber, questionText, answerOne, answerTwo, answerThree, answerFour, correctAnswerNumber}: AssessmentQuestionDetails) {

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <div>
                <h2>Question {questionNumber}</h2>
                <p style={{ marginTop: '15px', marginBottom: '15px' }}>
                    {questionText}
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ border: '2px solid lightgray', padding: '10px', flex: 1, marginRight: '10px' }}>{answerOne}</div>
                <div style={{ border: '2px solid lightgray', padding: '10px', flex: 1 }}>{answerTwo}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ border: '2px solid lightgray', padding: '10px', flex: 1, marginRight: '10px' }}>{answerThree}</div>
                <div style={{ border: '2px solid lightgray', padding: '10px', flex: 1 }}>{answerFour}</div>
            </div>

        </div>
    );
}
