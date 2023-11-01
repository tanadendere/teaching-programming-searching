import Image from 'next/image'
import Card from "@/components/Card/card";
import Quiz from "@/components/Quiz/quiz";

export default function Home() {
  const topics = [
    { topic: 'Topic 1', videoUrl: 'https://www.youtube.com/watch?v=19hcyQN8J7o', questions: [] },
    { topic: 'Topic 2', videoUrl: 'https://www.youtube.com/watch?v=SfxLtJyxaPg', questions: [] },
    { topic: 'Topic 2', videoUrl: 'https://www.youtube.com/watch?v=Q6w17GXD0co', questions: [] },
    // Add more topics with video URLs and quiz questions as needed
  ];

  const handleStartQuiz = (topic: string) => {
    // Logic to handle quiz start for the selected topic
    // You can open a modal or navigate to the quiz page with the selected topic's questions
  };

  const handleSubmitQuiz = (answers: string[]) => {
    // Logic to handle submitted quiz answers
  };

  return (
      <div className="app">
        {topics.map((topicData, index) => (
            <div key={index}>
              <Card
                  topic={topicData.topic}
                  videoUrl={topicData.videoUrl}
                  onStartQuiz={() => handleStartQuiz(topicData.topic)}
              />
              {/* You can conditionally render QuizCard based on user interaction */}
               <Quiz questions={topicData.questions} />
            </div>
        ))}
      </div>
  )
}
