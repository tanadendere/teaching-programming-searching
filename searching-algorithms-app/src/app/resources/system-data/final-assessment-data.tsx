import {AssessmentQuestionDetails, AssessmentData} from "@/app/interfaces/assessment-question-details";

// Final Assessment Data
export const finalAssessmentQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'Linear Search Question 1?',
        answerOne: 'First Answer - Linear',
        answerTwo: 'Second Answer - Linear',
        answerThree: 'Third Answer - Linear',
        answerFour: 'Fourth Answer (and correct) - Linear',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'Linear Search Question 2?',
        answerOne: 'First Answer - Linear',
        answerTwo: 'Second Answer(and correct) - Linear',
        answerThree: 'Third Answer - Linear',
        answerFour: 'Fourth Answer - Linear',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'Linear Search Question 3?',
        answerOne: 'First Answer - Linear',
        answerTwo: 'Second Answer - Linear',
        answerThree: 'Third Answer - Linear',
        answerFour: 'Fourth Answer (and correct) - Linear',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'Binary Search Question 1?',
        answerOne: 'First Answer - Binary',
        answerTwo: 'Second Answer - Binary',
        answerThree: 'Third Answer - Binary',
        answerFour: 'Fourth Answer (and correct) - Binary',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'Binary Search Question 2?',
        answerOne: 'First Answer - Binary',
        answerTwo: 'Second Answer(and correct) - Binary',
        answerThree: 'Third Answer - Binary',
        answerFour: 'Fourth Answer - Binary',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 6,
        questionText: 'Binary Search Question 3?',
        answerOne: 'First Answer - Binary',
        answerTwo: 'Second Answer - Binary',
        answerThree: 'Third Answer - Binary',
        answerFour: 'Fourth Answer (and correct) - Binary',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 7,
        questionText: 'Hashing Question 1?',
        answerOne: 'First Answer - Hashing',
        answerTwo: 'Second Answer - Hashing',
        answerThree: 'Third Answer - Hashing',
        answerFour: 'Fourth Answer (and correct) - Hashing',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 8,
        questionText: 'Hashing Question 2?',
        answerOne: 'First Answer - Hashing',
        answerTwo: 'Second Answer(and correct) - Hashing',
        answerThree: 'Third Answer - Hashing',
        answerFour: 'Fourth Answer - Hashing',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 9,
        questionText: 'Hashing Question 3?',
        answerOne: 'First Answer - Hashing',
        answerTwo: 'Second Answer - Hashing',
        answerThree: 'Third Answer - Hashing',
        answerFour: 'Fourth Answer (and correct) - Hashing',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 10,
        questionText: 'Hashing Question 4?',
        answerOne: 'First Answer(and correct) - Hashing',
        answerTwo: 'Second Answer - Hashing',
        answerThree: 'Third Answer - Hashing',
        answerFour: 'Fourth Answer - Hashing',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    }

]

export const finalAssessmentHints = [];

export const finalAssessmentData: AssessmentData = {
    quizQuestions: finalAssessmentQuestions,
    quizHints: finalAssessmentHints
}