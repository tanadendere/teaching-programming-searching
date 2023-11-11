export interface AssessmentQuestionDetails {
    questionNumber: number,
    questionText: string,
    answerOne: string,
    answerTwo: string,
    answerThree: string,
    answerFour: string,
    correctAnswerNumber: number,
    isFinalAssessment: boolean,
    onAnswerClick: (selectedAnswerNumber: number, correctAnswerNumber: number) => void;
}

export interface AssessmentData {
    quizQuestions: AssessmentQuestionDetails[],
    quizHints: string[]
}

export interface AlgorithmType {
    type: 'linear' | 'binary' | 'hashing' | null;
}