import {AssessmentQuestionDetails, AssessmentData} from "@/app/interfaces/assessment-question-details";

// Linear Search Quiz Data
export const linearQuizQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'Given the array [14, 27, 8, 5, 10, 3], what is the order in which elements are traversed to find the value 10 using Linear Search?',
        answerOne: '[14, 27, 8, 5, 10]',
        answerTwo: '[14, 27, 8, 5, 3]',
        answerThree: '[14, 27, 8, 5]',
        answerFour: '14, 27, 8',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'In a deck of playing cards, the cards are arranged in the following order: [Spades, Diamonds, Clubs, Hearts]. If you are searching for the "Queen of Hearts" using linear search, what is the order of suits traversed to find it?',
        answerOne: 'Spades, Diamonds, Clubs, Hearts',
        answerTwo: 'Spades, Diamonds, Hearts, Clubs',
        answerThree: 'Clubs, Diamonds, Spades, Hearts',
        answerFour: 'Hearts, Clubs, Diamonds, Spades',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'Suppose you have an array of names: [\'Alice\', \'Bob\', \'Charlie\', \'David\', \'Eva\']. Using linear search, what is the order of names traversed to find the target name \'David\'?',
        answerOne: '[Alice, Charlie, Bob, David]',
        answerTwo: '[Alice, Bob, Charlie, David]',
        answerThree: '[Bob, Alice, Eva, David]',
        answerFour: ' David, Charlie, Bob, Alice',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'You are given the array [32, 15, 7, 20, 45, 10]. Using linear search, what is the order of numbers traversed to find the target number 7?',
        answerOne: '15, 32, 7',
        answerTwo: '[7, 20, 45, 10]',
        answerThree: '[10, 45, 20, 7]',
        answerFour: '[ 32, 15, 7]',
        correctAnswerNumber: 4,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'Consider the array [4.5, 6.7, 2.3, 8.1, 5.4]. Using linear search, what is the order of elements traversed to find the target element 8.1?',
        answerOne: '[4.5, 6.7, 2.3, 8.1]',
        answerTwo: '[2.3, 4.5, 5.4, 6.7, 8.1]',
        answerThree: '[5.4, 2.3, 6.7, 4.5, 8.1]',
        answerFour: '[6.7, 4.5, 2.3, 8.1]',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    }
];

export const linearQuizHints = [
    'Move through each element one by one until you find the target element.',
    'Follow the sequence to find the "Queen of Hearts."',
    'Sequentially go through the array of names.',
    'Traverse the array until you locate the target number.',
    'Follow the same process, moving through each element, to find the target element 8.1.'
];


export const linearQuizData: AssessmentData = {
    quizQuestions: linearQuizQuestions,
    quizHints: linearQuizHints
}


// Binary Search Quiz
export const binaryQuizQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'Consider the following sorted array of playing cards: [2 of Hearts, 5 of Clubs, 7 of Spades, 10 of Diamonds, King of Hearts]. Using binary search, what is the order of cards traversed to find the 7 of Spades?',
        answerOne: '10 of Diamonds, 2 of Hearts, 7 of Spades',
        answerTwo: '5 of Clubs, 7 of Spades',
        answerThree: '10 of Diamonds, King of Hearts, 7 of Spades',
        answerFour: '5 of Clubs, 2 of Hearts, 7 of Spades',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'In a deck of playing cards sorted from Ace to King, what is the order of steps taken to find the Jack of Spades using binary search?',
        answerOne: ' Start: Ace of Spades, Split: Jack of Spades found',
        answerTwo: 'Start: King of Hearts, Split: Jack of Spades found',
        answerThree: 'Start: Ace of Spades, Split: Split again, Jack of Spades found',
        answerFour: 'Start: King of Hearts, Split: Split again, Jack of Spades found',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'Suppose you have a sorted array of numbers: [3, 8, 12, 15, 20]. Using binary search, what is the order of elements traversed to find the number 15?',
        answerOne: '12, 15',
        answerTwo: '12, 20, 8, 15',
        answerThree: '20, 12, 15',
        answerFour: '3, 8, 12, 15',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'You are given the sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Using binary search, what is the order of elements traversed to find the number 7?',
        answerOne: '5, 7, 8',
        answerTwo: '7, 5, 8',
        answerThree: '5, 6, 7',
        answerFour: '8, 7',
        correctAnswerNumber: 3,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'Consider the array [10, 20, 30, 40, 50]. Using binary search, what is the order of numbers traversed to find the target number 40?',
        answerOne: '30, 50, 20, 40',
        answerTwo: '30, 40',
        answerThree: '50, 30, 40',
        answerFour: '10, 20, 30, 40',
        correctAnswerNumber: 4,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    }
];

export const binaryQuizHints = [
    'Begin in the middle of the array and eliminate half based on comparisons.',
    'Depending on the comparison, eliminate one half of the remaining cards.',
    'Eliminate half of the remaining elements based on comparisons.',
    'Pay attention to the order of comparisons',
    'Identify the middle element in each step and compare it to the target.'
];


export const binaryQuizData: AssessmentData = {
    quizQuestions: binaryQuizQuestions,
    quizHints: binaryQuizHints
}

// Hashing Quiz
export const hashingQuizQuestions: AssessmentQuestionDetails[] = [
    {
        questionNumber: 1,
        questionText: 'What is the hashing index returned when the word "dog" goes through the hashing function that maps the letters of the alphabet to numbers 1 to 26?',
        answerOne: 'Index 4',
        answerTwo: 'Index 7',
        answerThree: 'Index 15',
        answerFour: 'Index 11',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 2,
        questionText: 'In a hash table with 26 slots, if the hashing function returns index 8 for the word "lemon," where will "lemon" be inserted?',
        answerOne: 'Index 8',
        answerTwo: 'Index 15',
        answerThree: 'Index 5',
        answerFour: 'Index 18',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 3,
        questionText: 'After the word "bird" goes through the hashing function, it returns index 19. In a hash table with 26 slots, where will "bird" be inserted?',
        answerOne: 'Index 19',
        answerTwo: 'Index 5',
        answerThree: 'Index 14',
        answerFour: 'Index 29',
        correctAnswerNumber: 1,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 4,
        questionText: 'What is the primary purpose of a hashing function in the hashing search algorithm?',
        answerOne: 'To sort the data efficiently.',
        answerTwo: 'To convert data into a fixed-size hash code for quick data retrieval.',
        answerThree: 'To create a backup of the hash table.',
        answerFour: 'To randomly distribute data across the hash table.',
        correctAnswerNumber: 2,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    },
    {
        questionNumber: 5,
        questionText: 'During the insertion process, if the hashing function returns the same index for two different words, what method is commonly used to handle this situation?',
        answerOne: 'Separate Chaining',
        answerTwo: 'Open Addressing (Linear Probing)',
        answerThree: 'Quadratic Probing',
        answerFour: 'Cuckoo Hashing',
        correctAnswerNumber: 4,
        isFinalAssessment: false,
        onAnswerClick: () => {}
    }
];

export const hashingQuizHints = [
    'Remember the hashing function that maps the letter "c" to the number 3.',
    'Utilize the hashing function to find the index for the word "lemon" (index 8).',
    'Utilize the hashing function to find the index for the word "bird" (index 19).',
    'Consider what hashing aims to achieve',
    'In Cuckoo Hashing, what is commonly used when the hashing function returns the same index for two different words'
];


export const hashingQuizData: AssessmentData = {
    quizQuestions: hashingQuizQuestions,
    quizHints: hashingQuizHints
}