import React, {createContext, useContext, ReactNode, Dispatch, SetStateAction, useState} from 'react';

interface AppContextProps {
    showHome: boolean;
    setShowHome: Dispatch<SetStateAction<boolean>>;
    showContent: boolean;
    setShowContent: Dispatch<SetStateAction<boolean>>;
    showQuiz: boolean;
    setShowQuiz: Dispatch<SetStateAction<boolean>>;
    showAssessment: boolean;
    setShowAssessment: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showHome, setShowHome] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showAssessment, setShowAssessment] = useState(false);

    return (
        <AppContext.Provider value={{ showHome, setShowHome, showContent, setShowContent, showQuiz, setShowQuiz, showAssessment, setShowAssessment }}>
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
