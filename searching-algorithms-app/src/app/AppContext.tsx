import React, {createContext, useContext, ReactNode, Dispatch, SetStateAction, useState} from 'react';
import {QuizData} from "@/app/interfaces/assessment-question-details";

interface AppContextProps {
    showHome: boolean;
    setShowHome: Dispatch<SetStateAction<boolean>>;
    showContent: boolean;
    setShowContent: Dispatch<SetStateAction<boolean>>;
    showQuiz: boolean;
    setShowQuiz: Dispatch<SetStateAction<boolean>>;
    showAssessment: boolean;
    setShowAssessment: Dispatch<SetStateAction<boolean>>;
    quizData: QuizData,
    setQuizData: Dispatch<SetStateAction<QuizData>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showHome, setShowHome] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showAssessment, setShowAssessment] = useState(false);
    const [quizData, setQuizData] = useState({
        quizQuestions: [],
        quizHints: []
    } as QuizData);

    return (
        <AppContext.Provider value={{ showHome, setShowHome, showContent, setShowContent, showQuiz, setShowQuiz, showAssessment, setShowAssessment, quizData, setQuizData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};
