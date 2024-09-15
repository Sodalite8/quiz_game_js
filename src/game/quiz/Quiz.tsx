import React from 'react';
import ProblemSection from '../components/ProblemSection';
import AnswerSection from '../components/AnswerSection';
import { INITIAL_QUIZ_RESULTS, QuizProblem, QuizResults } from '../../_constants/constants';
import { SmallButton } from '../components/Buttons';


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>;
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


// The unit of quiz game components like button and image
function Quiz(props: Props) {
    // About finishing the quiz in the middle
    const exitQuiz = () => {
        const ans: boolean = window.confirm("本当に終了しますか？");
        if (ans) {
            props.setCurrentQuiz(-1);
            props.setQuizProblems([]);
            props.setQuizResults(INITIAL_QUIZ_RESULTS);
        }
    };


    return (
        <>
            <div className='relative flex w-full flex-col px-8'>
                <ProblemSection current_quiz={props.current_quiz}
                    quiz_problems={props.quiz_problems} />
                <AnswerSection current_quiz={props.current_quiz}
                    setCurrentQuiz={props.setCurrentQuiz}
                    quiz_problems={props.quiz_problems}
                    quiz_results={props.quiz_results} 
                    setQuizResults={props.setQuizResults} />
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                items-center justify-center border-t-4 border-yellow-400/60 
                p-4'>
                <SmallButton click={exitQuiz}
                    text='クイズを終了' />
            </div>
        </>
    );
}


export default Quiz;