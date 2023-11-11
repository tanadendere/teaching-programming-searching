import {AssessmentQuestionDetails, AssessmentData} from "@/app/interfaces/assessment-question-details";

// Linear Search Quiz Data
export const linearQuizQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'Given the array [3, 7, 1, 9, 4], what is the order in which elements are traversed to find the value 9 using Linear Search?',
        answerOne: '[3, 7, 1, 9]',
        answerTwo: '[3, 4, 7, 9]',
        answerThree: '[3, 7, 1, 9, 4]',
        answerFour: 'None of the above',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'For the array [8, 2, 5, 1, 6], what is the sequence of elements visited when searching for 5 using Linear Search?',
        answerOne: '[8, 6, 2, 5]',
        answerTwo: '[8, 2, 5, 1, 6]',
        answerThree: '[8, 2, 5]',
        answerFour: 'None of the above',
        correctAnswerNumber: 3,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'In the array [4, 6, 2, 1, 7], what is the order of elements traversed to locate the value 1 using Linear Search?',
        answerOne: '[4, 6, 2, 1]',
        answerTwo: '[4, 6, 2, 1, 7]',
        answerThree: '[4, 6, 7, 1]',
        answerFour: 'None of the above',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'For the array [10, 3, 8, 5, 1], what is the sequence of elements visited when searching for 8 using Linear Search?',
        answerOne: '[10, 3, 8, 5, 1]',
        answerTwo: '[10, 3, 8]',
        answerThree: '[10, 3, 8, 5]',
        answerFour: 'None of the above',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'Given the array [6, 2, 9, 4, 1], what is the order of elements visited when looking for 7 using Linear Search?',
        answerOne: '[6, 1, 2, 4, 9]',
        answerTwo: '[6, 2, 9, 4, 1]',
        answerThree: '[6, 2, 9, 4]',
        answerFour: 'None of the above',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    }
];

export const linearQuizHints = [
    'Hint: Trace the order in which elements are checked during the Linear Search process.',
    'Hint: Consider the sequence of elements visited for successful searches.',
    'Hint: Think about the scenario where the target value is not in the array.',
    'Hint: Pay attention to the movement through the array when searching for a specific value.',
    'Hint: Focus on the steps involved in finding the target element using Linear Search.'
];


export const linearQuizData: AssessmentData = {
    quizQuestions: linearQuizQuestions,
    quizHints: linearQuizHints
}


// Binary Search Quiz
export const binaryQuizQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'Given the sorted array [2, 5, 8, 12, 16, 23], what is the order of indices visited when searching for the value 16 using Binary Search?',
        answerOne: '0, 2, 4, 5',
        answerTwo: '0, 1, 2, 4, 5',
        answerThree: '0, 2, 4',
        answerFour: '0, 1, 3, 4, 5',
        correctAnswerNumber: 3,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'For the sorted array [10, 20, 30, 40, 50], what is the sequence of indices visited when searching for 40 using Binary Search?',
        answerOne: '0, 1, 2, 3',
        answerTwo: '0, 2, 3',
        answerThree: '1, 2, 3, 4',
        answerFour: '1, 2, 3, 4, 5',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'In the sorted array [5, 10, 15, 20, 25, 30], what is the order of indices visited when searching for the value 10 using Binary Search?',
        answerOne: '2, 3, 4',
        answerTwo: '0, 1',
        answerThree: '0, 1, 2',
        answerFour: '1, 2, 3, 4, 5',
        correctAnswerNumber: 3,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'For the sorted array [1, 3, 5, 7, 9], what is the sequence of indices visited when searching for 7 using Binary Search?',
        answerOne: '0, 2, 3',
        answerTwo: '2, 3, 4',
        answerThree: '0, 1, 2, 3',
        answerFour: '1, 3, 4',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'Given the sorted array [4, 8, 12, 16, 20], what is the order of indices visited when looking for the value 6 using Binary Search?',
        answerOne: '1, 2',
        answerTwo: '0, 1',
        answerThree: '2, 3',
        answerFour: 'None of the above',
        correctAnswerNumber: 4,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    }
];

export const binaryQuizHints = [
    'Hint: Consider how Binary Search divides the search space in each iteration.',
    'Hint: Reflect on the impact of the sorted order on the Binary Search algorithm.',
    'Hint: Think about the scenarios where the target value is found in the middle or at the edges of the array.',
    'Hint: Pay attention to the movement through the array when searching for a specific value.',
    'Hint: Focus on the steps involved in finding the target element using Binary Search.'
];


export const binaryQuizData: AssessmentData = {
    quizQuestions: binaryQuizQuestions,
    quizHints: binaryQuizHints
}

// Hashing Quiz
export const hashingQuizQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'For a hash table of size 7, what is the order of indices visited when inserting the values 18, 7, 12, and 25 using linear probing?',
        answerOne: '1, 2, 3, 4',
        answerTwo: '4, 5, 6, 0',
        answerThree: '2, 3, 4, 5',
        answerFour: '1, 3, 5, 6',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'Given a hash table of size 5 with separate chaining, what is the order of indices visited when inserting values 15, 5, 20, and 10 using a hash function?',
        answerOne: '0, 1, 2, 3',
        answerTwo: '2, 4, 0, 1',
        answerThree: '1, 2, 3, 4',
        answerFour: '0, 1, 2, 4',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'In a hash table of size 11 with quadratic probing, what is the order of indices visited when inserting values 25, 9, 16, and 36?',
        answerOne: '3, 4, 1, 0',
        answerTwo: '5, 6, 7, 8',
        answerThree: '2, 3, 4, 5',
        answerFour: '1, 3, 5, 7',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'For a hash table of size 8 with open addressing, what is the order of indices visited when inserting values 24, 8, 16, and 32 using double hashing?',
        answerOne: '4, 2, 6, 0',
        answerTwo: '0, 4, 1, 6',
        answerThree: '2, 3, 5, 7',
        answerFour: '1, 3, 5, 7',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'Given a hash table of size 10 with separate chaining, what is the order of indices visited when searching for the value 15 with a hash function?',
        answerOne: '0',
        answerTwo: '0, 1, 2',
        answerThree: '5, 6, 7',
        answerFour: '3, 4, 5',
        correctAnswerNumber: 4,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    }
];

export const hashingQuizHints = [
    'Hint: Consider the impact of the hash function on the distribution of values in the hash table.',
    'Hint: Reflect on the collision resolution technique used (linear probing, quadratic probing, or separate chaining).',
    'Hint: Think about the order in which indices are probed or linked in the hash table.',
    'Hint: Pay attention to the hash table size and how it affects the placement of values.',
    'Hint: Focus on the steps involved in inserting or searching for a specific value in the hash table.'
];


export const hashingQuizData: AssessmentData = {
    quizQuestions: hashingQuizQuestions,
    quizHints: hashingQuizHints
}