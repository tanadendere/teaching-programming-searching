import React from 'react';
import HomePageComponent from '@/components/HomePage/HomePageComponent';
import ContentPageComponent from '@/components/ContentPage/ContentPageComponent';
import QuizComponent from '@/components/Quiz/QuizComponent';

const AppContainerComponent: React.FC = () => {
    var showHome = true;
    var showContent = false;
    var showQuiz = false;

    return (
        <div>
            {showHome && <HomePageComponent />}
            {showContent && <ContentPageComponent />}
            {showQuiz && <QuizComponent />}
        </div>
    );
};

export default AppContainerComponent;
