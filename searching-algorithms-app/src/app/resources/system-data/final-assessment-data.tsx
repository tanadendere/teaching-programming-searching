import {AssessmentQuestionDetails, AssessmentData} from "@/app/interfaces/assessment-question-details";

// Final Assessment Data
export const finalAssessmentQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'Consider a linear search on an array of names. What would be the order in which you find the names "Alice," "Bob," "Charlie," and "David"?',
        answerOne: 'Alice, Bob, Charlie, David',
        answerTwo: 'Charlie, David, Bob, Alice',
        answerThree: 'Bob, Alice, David, Charlie',
        answerFour: 'David, Alice, Charlie, Bob',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'In a binary search on a sorted list of numbers, what is the order of indices visited when searching for the value 25 in the list [10, 15, 20, 25, 30, 35]?',
        answerOne: '3, 2, 1, 0',
        answerTwo: '0, 1, 2, 3',
        answerThree: '2, 4, 3, 1',
        answerFour: '4, 3, 2, 1',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'Imagine a scenario where you are using linear probing to insert values into a hash table of size 7. If you insert values 18, 7, 12, and 25, what would be the order of indices visited?',
        answerOne: '1, 2, 3, 4',
        answerTwo: '4, 5, 6, 0',
        answerThree: '2, 3, 4, 5',
        answerFour: '1, 3, 5, 6',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'For a binary search on a sorted array [5, 10, 15, 20, 25, 30], what would be the order of indices visited when searching for the value 20?',
        answerOne: '2, 3, 4',
        answerTwo: '5, 4, 3',
        answerThree: '0, 1, 2, 3',
        answerFour: '4, 3, 2, 1',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'In a hash table of size 10 with separate chaining, what is the order of indices visited when searching for the value 15 with a hash function?',
        answerOne: '0, 1, 2',
        answerTwo: '0, 1, 2, 4',
        answerThree: '5, 6, 7',
        answerFour: '3, 4, 5',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 6,
        questionText: 'You are using quadratic probing in a hash table of size 11. If you insert values 25, 9, 16, and 36, what would be the order of indices visited?',
        answerOne: '3, 4, 1, 0',
        answerTwo: '5, 6, 7, 8',
        answerThree: '2, 3, 4, 5',
        answerFour: '1, 3, 5, 7',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 7,
        questionText: 'Suppose you are inserting values 24, 8, 16, and 32 into a hash table of size 8 using double hashing. What is the order of indices visited?',
        answerOne: '4, 2, 6, 0',
        answerTwo: '0, 4, 1, 6',
        answerThree: '2, 3, 5, 7',
        answerFour: '1, 3, 5, 7',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 8,
        questionText: 'In a binary search on a sorted array [10, 20, 30, 40, 50], what would be the order of indices visited when searching for the value 40?',
        answerOne: '2, 1, 3, 4',
        answerTwo: '0, 1, 2, 4',
        answerThree: '4, 3, 2, 1',
        answerFour: '3, 2, 4, 1',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 9,
        questionText: 'You are using separate chaining in a hash table of size 5. If you insert values 15, 5, 20, and 10 using a hash function, what is the order of indices visited?',
        answerOne: '0, 1, 2, 3',
        answerTwo: '2, 4, 0, 1',
        answerThree: '1, 2, 3, 4',
        answerFour: '0, 1, 2, 4',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 10,
        questionText: 'For a hash table of size 10 with open addressing, if you insert values 14, 28, 42, and 56 using linear probing, what is the order of indices visited?',
        answerOne: '4, 5, 6, 7',
        answerTwo: '0, 1, 2, 3',
        answerThree: '7, 8, 9, 0',
        answerFour: '2, 3, 5, 6',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    }
];


export const finalAssessmentHints = [];

export const finalAssessmentData: AssessmentData = {
    quizQuestions: finalAssessmentQuestions,
    quizHints: finalAssessmentHints
}