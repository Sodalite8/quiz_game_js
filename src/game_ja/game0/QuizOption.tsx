import React from "react";
import { QUIZ_OPTIONS_CONST, QuizOptions, QuizProblem, SCREENS } from "../../constants";
import { changeString, changeNumber, validateNumber } from "../../func";
import { start } from "repl";
import { createProblems } from "./createProblem";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>
}


function QuizOption(props: Props) {
    // About quiz difficulty
    const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeString<QuizOptions>(props.quiz_options, "difficulty", e.target.value, props.setQuizOptions);
    };

    // About the number of problems in the quiz
    const changeProblemsNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNumber<QuizOptions>(props.quiz_options, "problems_num", e.target.value, props.setQuizOptions);
    };
    const validateProblemsNum = () => {
        validateNumber<QuizOptions>(props.quiz_options, "problems_num", QUIZ_OPTIONS_CONST.max_problems_num, QUIZ_OPTIONS_CONST.min_problems_num, props.setQuizOptions);
    };


    // About creating the problems and starting the quiz
    const startQuiz = () => {
        props.setQuizProblems(createProblems(props.quiz_options));
        props.setCurrentQuiz(0);
    };


    return (
        <>
            <h2 className="menu0_text">問題設定</h2>
            <div>
                難易度
                <div>
                    <select name="sel_difficulty" value={props.quiz_options.difficulty} onChange={changeDifficulty}>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                        <option value="hardcore">Hardcore</option>
                    </select>
                </div>
                問題数
                <div>
                    <input type="range" name="ran_problems_num"
                        min={QUIZ_OPTIONS_CONST.min_problems_num} max={QUIZ_OPTIONS_CONST.max_problems_num} step="1"
                        value={props.quiz_options.problems_num} onChange={changeProblemsNum}></input>
                    <input type="number" name="num_problems_num"
                        min={QUIZ_OPTIONS_CONST.min_problems_num} max={QUIZ_OPTIONS_CONST.max_problems_num} step="1"
                        value={props.quiz_options.problems_num} onChange={changeProblemsNum} onBlur={validateProblemsNum}></input>
                </div>
            </div>
            <div>
                <button onClick={startQuiz}>クイズ開始</button>
            </div>
            <div>
                <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
            </div>
        </>
    );
}


export default QuizOption;
