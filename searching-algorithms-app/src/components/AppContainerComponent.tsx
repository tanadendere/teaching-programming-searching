import React, { useEffect } from 'react';
import HomePageComponent from '@/components/HomePage/HomePageComponent';
import ContentPageComponent from '@/components/ContentPage/ContentPageComponent';
import QuizComponent from '@/components/Quiz/QuizComponent';
import { useAppContext } from "@/app/AppContext";
import AssessmentComponent from "@/components/Assessment/AssessmentComponent";
import {binaryQuizData, hashingQuizData, linearQuizData} from "@/app/resources/system-data/quiz-data";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import {VideoCardDetails} from "@/app/interfaces/video-card-details";

const AppContainerComponent: React.FC = () => {
    const { showHome, showContent, showQuiz, setShowHome,
        setShowContent, setShowQuiz, showAssessment
        , setShowAssessment, quizData, setQuizData,
        assessmentData } = useAppContext();

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
        setQuizData(hashingQuizData);
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
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                        element={<HomePageComponent/>} />

                    <Route path="/content"
                        element={<ContentPageComponent />} />

                    <Route path="/quiz"
                           element={<QuizComponent />} />

                    <Route path="/assessment"
                           element={<AssessmentComponent quizQuestions={assessmentData.quizQuestions} quizHints={assessmentData.quizHints} />} />
                </Routes>

            </BrowserRouter >
        </>

        // <Router location={''} navigator={undefined}>
        //     <div>
        //         <Route path="/" element={<HomePageComponent/>}/>
        //         <Route path="/about" element={<ContentPageComponent/<}/>
        //         <button onClick={handleHomeButtonClick}>Show Home</button>
        //         <button onClick={handleContentButtonClick}>Show Content</button>
        //         <button onClick={handleQuizButtonClick}>Show Quiz</button>
        //         <button onClick={handleAssessmentButtonClick}>Show Assessment</button>

        //         {showHome && <HomePageComponent onChange={handleContentButtonClick}/>}
        //         {showContent && <ContentPageComponent />}
        //         {showQuiz && <QuizComponent />}
        //         {showAssessment && <AssessmentComponent />}
        //         {!showHome && !showContent && !showQuiz && !showAssessment && <h1>ERROR: PAGE NOT FOUND</h1>}
        //     </div>
        // </Router>

        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<HomePageComponent />}>
        //         <Route index element={<HomePageComponent />} />
        //         <Route path="content" element={<ContentPageComponent />} />
        //         <Route path="quiz" element={<QuizComponent />} />
        //         <Route path="*" element={<AssessmentComponent />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>

    );
};

export default AppContainerComponent;
