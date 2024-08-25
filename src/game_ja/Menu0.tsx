import React from 'react';
import { QuizOptions, QUIZ_OPTIONS_CONST, SCREENS } from "../constants";
import { changeNumber, changeString, validateNumber } from '../func';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>
}

function Menu0(props: Props) {
    const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeString<QuizOptions>(props.quiz_options, "difficulty", e.target.value, props.setQuizOptions);
    };
    const changeProblemsNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNumber<QuizOptions>(props.quiz_options, "problems_num", e.target.value, props.setQuizOptions);
    };
    const validateProblemsNum = () => {
        validateNumber<QuizOptions>(props.quiz_options, "problems_num", QUIZ_OPTIONS_CONST.max_problems_num, QUIZ_OPTIONS_CONST.min_problems_num, props.setQuizOptions);
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
                <button onClick={() => props.setScreen(SCREENS.GAME0)}>クイズ開始</button>
            </div>
            <div>
                <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
            </div>
            <div>
                Test: {props.quiz_options.problems_num}
            </div>
        </>
    );
}

export default Menu0;
