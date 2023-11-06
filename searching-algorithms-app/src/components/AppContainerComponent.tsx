import React, { useEffect } from 'react';
import HomePageComponent from '@/components/HomePage/HomePageComponent';
import ContentPageComponent from '@/components/ContentPage/ContentPageComponent';
import QuizComponent from '@/components/Quiz/QuizComponent';
import { useAppContext } from "@/app/AppContext";
import AssessmentComponent from "@/components/Assessment/AssessmentComponent";

const AppContainerComponent: React.FC = () => {
    const { showHome, showContent, showQuiz, setShowHome,
        setShowContent, setShowQuiz, showAssessment, setShowAssessment } = useAppContext();

    const handleHomeButtonClick = () => {
        setShowHome(true);
        setShowContent(false);
        setShowQuiz(false);
        setShowAssessment(false);
    };

    const handleContentButtonClick = () => {
        setShowHome(false);
        setShowContent(true);
        setShowQuiz(false);
        setShowAssessment(false);
    };

    const handleQuizButtonClick = () => {
        setShowHome(false);
        setShowContent(false);
        setShowQuiz(true);
        setShowAssessment(false);
    };

    const handleAssessmentButtonClick = () => {
        setShowHome(false);
        setShowContent(false);
        setShowQuiz(false);
        setShowAssessment(true);
    };

    useEffect(() => {
        setShowHome(false);
        setShowContent(true);
        setShowQuiz(false);
        setShowAssessment(false);
    }, []); // This useEffect runs once on component mount to set initial context values

    return (
        <div>
            <button onClick={handleHomeButtonClick}>Show Home</button>
            <button onClick={handleContentButtonClick}>Show Content</button>
            <button onClick={handleQuizButtonClick}>Show Quiz</button>
            <button onClick={handleAssessmentButtonClick}>Show Assessment</button>

            {showHome && <HomePageComponent />}
            {showContent && <ContentPageComponent />}
            {showQuiz && <QuizComponent />}
            {showAssessment && <AssessmentComponent />}
            {!showHome && !showContent && !showQuiz && !showAssessment && <h1>ERROR: PAGE NOT FOUND</h1>}
        </div>
    );
};

export default AppContainerComponent;
