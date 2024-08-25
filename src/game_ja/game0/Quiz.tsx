import React from 'react';
import ProblemSection from './ProblemSection';
import AnswerSection from './AnswerSection';


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {
    return (
        <>
            <div>
                <ProblemSection />
            </div>
            <div>
                <AnswerSection current_quiz={props.current_quiz} setCurrentQuiz={props.setCurrentQuiz}/>
            </div>
        </>
    );
}


export default Quiz;
