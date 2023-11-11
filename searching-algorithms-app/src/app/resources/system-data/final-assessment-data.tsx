import {AssessmentQuestionDetails, AssessmentData} from "@/app/interfaces/assessment-question-details";

// Final Assessment Data
export const finalAssessmentQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'What is the primary purpose of a hashing function in the hashing search algorithm?',
        answerOne: 'To sort the data efficiently.',
        answerTwo: 'To convert data into a fixed-size hash code for quick data retrieval.',
        answerThree: 'To create a backup of the hash table.',
        answerFour: 'To randomly distribute data across the hash table.',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'After the word "bird" goes through the hashing function, it returns index 19. In a hash table with 26 slots, where will "bird" be inserted?',
        answerOne: 'Index 19',
        answerTwo: 'Index 5',
        answerThree: 'Index 14',
        answerFour: 'Index 29',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'What is the hashing index returned when the word "dog" goes through the hashing function that maps the letters of the alphabet to numbers 1 to 26?',
        answerOne: 'Index 4',
        answerTwo: 'Index 7',
        answerThree: 'Index 15',
        answerFour: 'Index 11',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'Consider the array [10, 20, 30, 40, 50]. Using binary search, what is the order of numbers traversed to find the target number 40?',
        answerOne: '30, 50, 20, 40',
        answerTwo: '30, 40',
        answerThree: '50, 30, 40',
        answerFour: '10, 20, 30, 40',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'You are given the sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Using binary search, what is the order of elements traversed to find the number 7?',
        answerOne: '5, 7, 8',
        answerTwo: '7, 5, 8',
        answerThree: '5, 6, 7',
        answerFour: '8, 7',
        correctAnswerNumber: 3,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 6,
        questionText: 'In a deck of playing cards sorted from Ace to King, what is the order of steps taken to find the Jack of Spades using binary search?',
        answerOne: ' Start: Ace of Spades, Split: Jack of Spades found',
        answerTwo: 'Start: King of Hearts, Split: Jack of Spades found',
        answerThree: 'Start: Ace of Spades, Split: Split again, Jack of Spades found',
        answerFour: 'Start: King of Hearts, Split: Split again, Jack of Spades found',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 7,
        questionText: 'Consider the array [4.5, 6.7, 2.3, 8.1, 5.4]. Using linear search, what is the order of elements traversed to find the target element 8.1?',
        answerOne: '[4.5, 6.7, 2.3, 8.1]',
        answerTwo: '[2.3, 4.5, 5.4, 6.7, 8.1]',
        answerThree: '[5.4, 2.3, 6.7, 4.5, 8.1]',
        answerFour: '[6.7, 4.5, 2.3, 8.1]',
        correctAnswerNumber: 1,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 8,
        questionText: 'You are given the array [32, 15, 7, 20, 45, 10]. Using linear search, what is the order of numbers traversed to find the target number 7?',
        answerOne: '15, 32, 7',
        answerTwo: '[7, 20, 45, 10]',
        answerThree: '[10, 45, 20, 7]',
        answerFour: '[ 32, 15, 7]',
        correctAnswerNumber: 4,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 9,
        questionText: 'Suppose you have an array of names: [\'Alice\', \'Bob\', \'Charlie\', \'David\', \'Eva\']. Using linear search, what is the order of names traversed to find the target name \'David\'?',
        answerOne: '[Alice, Charlie, Bob, David]',
        answerTwo: '[Alice, Bob, Charlie, David]',
        answerThree: '[Bob, Alice, Eva, David]',
        answerFour: ' David, Charlie, Bob, Alice',
        correctAnswerNumber: 2,
        isFinalAssessment: true,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 10,
        questionText: 'In a deck of playing cards, the cards are arranged in the following order: [Spades, Diamonds, Clubs, Hearts]. If you are searching for the "Queen of Hearts" using linear search, what is the order of suits traversed to find it?',
        answerOne: 'Spades, Diamonds, Clubs, Hearts',
        answerTwo: 'Spades, Diamonds, Hearts, Clubs',
        answerThree: 'Clubs, Diamonds, Spades, Hearts',
        answerFour: 'Hearts, Clubs, Diamonds, Spades',
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