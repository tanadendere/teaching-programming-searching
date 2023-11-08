import React, {createContext, useContext, ReactNode, Dispatch, SetStateAction, useState} from 'react';
import {AssessmentData, AlgorithmType} from "@/app/interfaces/assessment-question-details";
import {finalAssessmentHints, finalAssessmentQuestions} from "@/app/resources/system-data/final-assessment-data";

interface AppContextProps {
    showHome: boolean;
    setShowHome: Dispatch<SetStateAction<boolean>>;
    showContent: boolean;
    setShowContent: Dispatch<SetStateAction<boolean>>;
    showQuiz: boolean;
    setShowQuiz: Dispatch<SetStateAction<boolean>>;
    showAssessment: boolean;
    setShowAssessment: Dispatch<SetStateAction<boolean>>;
    quizData: AssessmentData,
    setQuizData: Dispatch<SetStateAction<AssessmentData>>;
    algorithmType: AlgorithmType,
    setAlgorithmType: Dispatch<SetStateAction<AlgorithmType>>;
    assessmentData: AssessmentData,
    setAssessmentData: Dispatch<SetStateAction<AssessmentData>>;
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
    } as AssessmentData);
    const [algorithmType, setAlgorithmType] = useState({
        type: null
    } as AlgorithmType);
    const [assessmentData, setAssessmentData] = useState({
        quizQuestions: finalAssessmentQuestions,
        quizHints: finalAssessmentHints
    } as AssessmentData);

    return (
        <AppContext.Provider value={{ showHome, setShowHome, showContent, setShowContent, showQuiz, setShowQuiz, showAssessment, setShowAssessment, quizData, setQuizData, algorithmType, setAlgorithmType, assessmentData, setAssessmentData }}>
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
