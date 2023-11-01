import React from 'react';

interface QuizProps {
    questions: string[]; // Update this type according to your quiz data structure
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
    // Logic to render quiz questions goes here

    return (
        <div className="quiz-card">
            {/* Render quiz questions */}
            <button>Submit Quiz</button>
        </div>
    );
};

export default Quiz;
