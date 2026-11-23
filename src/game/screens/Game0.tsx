import React from 'react';
import { CookieKeys, INITIAL_QUIZ_RESULTS, Options, QuizAnswer, QuizOptions, QuizProblem, QuizResults, SCREENS } from '../../_constants/constants';
import Quiz from '../quiz/Quiz';
import QuizResult from '../quiz/QuizResult';
import QuizOption from '../quiz/QuizOption';


interface Props {
    changeCookies: (key: CookieKeys, value: Options | QuizOptions) => void;
    deleteCookies: () => void;
    accept_cookies: boolean;
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
}


// ゲーム画面
function Game0(props: Props) {
    // 現在のクイズ番号
    // 問題のリスト
    // クイズ結果（総得点や正答率）
    // 解答のリスト
    const [current_quiz, setCurrentQuiz] = React.useState<number>(-1);
    const [quiz_problems, setQuizProblems] = React.useState<QuizProblem[]>([]);
    const [quiz_results, setQuizResults] = React.useState<QuizResults>(INITIAL_QUIZ_RESULTS);
    const [quiz_answers, setQuizAnswers] = React.useState<QuizAnswer[]>([]);


    // current_quizの値により、ゲーム画面を切り替え
    const renderGame = () => {
        // クイズ設定
        if (current_quiz == -1) {
            return (
                <QuizOption
                    changeCookies={props.changeCookies}
                    deleteCookies={props.deleteCookies}
                    accept_cookies={props.accept_cookies}
                    screen={props.screen}
                    setScreen={props.setScreen}
                    options={props.options}
                    quiz_options={props.quiz_options}
                    setQuizOptions={props.setQuizOptions}
                    current_quiz={current_quiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quiz_problems={quiz_problems}
                    setQuizProblems={setQuizProblems}
                />
            );
        }


        // 問題表示
        else if (current_quiz >= 0 && current_quiz < props.quiz_options.problems_num) {
            return (
                <Quiz
                    options={props.options}
                    quiz_options={props.quiz_options}
                    current_quiz={current_quiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quiz_problems={quiz_problems}
                    setQuizProblems={setQuizProblems}
                    quiz_results={quiz_results}
                    setQuizResults={setQuizResults}
                    quiz_answers={quiz_answers}
                    setQuizAnswers={setQuizAnswers}
                />
            );
        }


        // 結果表示
        else if (current_quiz === props.quiz_options.problems_num) {
            return (
                <QuizResult
                    screen={props.screen}
                    setScreen={props.setScreen}
                    options={props.options}
                    current_quiz={current_quiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quiz_problems={quiz_problems}
                    setQuizProblems={setQuizProblems}
                    quiz_results={quiz_results}
                    setQuizResults={setQuizResults}
                />
            );
        }


        else {
            return (
                <>
                    <h2>不正な問題番号に設定されています</h2>
                    <button onClick={() => { props.setScreen(SCREENS.TITLE) }} />
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
