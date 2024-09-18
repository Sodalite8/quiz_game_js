import React from 'react';
import { INITIAL_QUIZ_RESULTS, Options, QuizOptions, QuizProblem, QuizResults, SCREENS } from '../../_constants/constants';
import Quiz from '../quiz/Quiz';
import Result from '../quiz/Result';
import QuizOption from '../quiz/QuizOption';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
}


// Display the quiz game
function Game0(props: Props) {
    /*
    current_quiz    : The current quiz number
    quiz_problems   : The problems of the current game
    quiz_results    : The results of the current game
    */
    const [current_quiz, setCurrentQuiz] = React.useState<number>(-1);
    const [quiz_problems, setQuizProblems] = React.useState<QuizProblem[]>([]);
    const [quiz_results, setQuizResults] = React.useState<QuizResults>(INITIAL_QUIZ_RESULTS);


    // About rendering the quiz options and changing problems
    const renderGame = () => {
        if (current_quiz == -1) {
            return (
                <>
                    <QuizOption screen={props.screen} setScreen={props.setScreen}
                        quiz_options={props.quiz_options} setQuizOptions={props.setQuizOptions}
                        current_quiz={current_quiz} setCurrentQuiz={setCurrentQuiz}
                        quiz_problems={quiz_problems} setQuizProblems={setQuizProblems} />
                </>
            );
        }

        else if (current_quiz >= 0 && current_quiz < props.quiz_options.problems_num) {
            return (
                <>
                    <Quiz options={props.options} 
                        quiz_options={props.quiz_options}
                        current_quiz={current_quiz} setCurrentQuiz={setCurrentQuiz}
                        quiz_problems={quiz_problems} setQuizProblems={setQuizProblems}
                        quiz_results={quiz_results} setQuizResults={setQuizResults} />
                </>
            );
        }

        else if (current_quiz === props.quiz_options.problems_num) {
            return (
                <>
                    <Result screen={props.screen} setScreen={props.setScreen}
                        current_quiz={current_quiz} setCurrentQuiz={setCurrentQuiz}
                        quiz_problems={quiz_problems} setQuizProblems={setQuizProblems}
                        quiz_results={quiz_results} setQuizResults={setQuizResults} />
                </>
            );
        }

        else {
            return (
                <>
                    <h2>不正な問題番号に設定されています</h2>
                    <button onClick={() => { props.setScreen(SCREENS.TITLE) }}></button>
                </>
            );
        }
    };


    return (
        <>
            {renderGame()}
        </>
    );
}


export default Game0;
