import React from 'react';
import { QuizOptions } from '../../constants';
import { changeNumber } from '../../func';


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {


    return (
        <>
        </>
    );
}


export default Quiz;
