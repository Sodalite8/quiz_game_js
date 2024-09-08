import React from 'react';
import { INITIAL_QUIZ_RESULTS, QuizOptions, QuizProblem, QuizResults, SCREENS } from '../../_constants/constants';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import QuizOption from '../components/QuizOption';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
}


// Display the quiz
function Game0(props: Props) {
    const [current_quiz, setCurrentQuiz] = React.useState<number>(-1);
    const [quiz_problems, setQuizProblems] = React.useState<QuizProblem[]>([]);
    const [quiz_results, setQuizResults] = React.useState<QuizResults>(INITIAL_QUIZ_RESULTS);


    // About rendering the quiz and changing problems
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
                    <Quiz current_quiz={current_quiz} setCurrentQuiz={setCurrentQuiz} 
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
            <h2>ゲーム画面（工事中）</h2>
            <div>
                {renderGame()}
            </div>
        </>
    );
}


export default Game0;
