"use client";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AssessmentQuestionComponent from "@/components/AssementQuestion/AssessmentQuestionComponent";
import {AssessmentQuestionDetails} from "@/app/interfaces/assessment-question-details";
import VideoCardComponent from "@/components/VideoCard/VideoCardComponent";

export default function AssessmentComponent() {

    const assessmentQuestions: AssessmentQuestionDetails[] = [
        {
            questionNumber: 1,
            questionText: 'The first question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: true
        },
        {
            questionNumber: 2,
            questionText: 'The second question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer(and correct)',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer ',
            correctAnswerNumber: 2,
            isFinalAssessment: true
        },
        {
            questionNumber: 3,
            questionText: 'The third question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: true
        },
        {
            questionNumber: 4,
            questionText: 'The fourth question?',
            answerOne: 'First Answer(and correct)',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer ',
            correctAnswerNumber: 1,
            isFinalAssessment: true
        },
        {
            questionNumber: 5,
            questionText: 'The fifth question?',
            answerOne: 'First Answer',
            answerTwo: 'Second Answer',
            answerThree: 'Third Answer',
            answerFour: 'Fourth Answer (and correct)',
            correctAnswerNumber: 4,
            isFinalAssessment: true
        }
    ]

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
                    />
                ))}
            </div>

            <div style={{ marginTop: '30px' }}>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </div>
    );
}
