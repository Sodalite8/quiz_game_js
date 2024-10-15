import React from "react";
import { Options, QUIZ_OPTIONS_CONST, QuizOptions, QuizProblem, SCREENS } from "../../_constants/constants";
import { changeValues, limitToRange } from "../../_scripts/func";
import { createProblems } from "../scripts/createProblems";
import { MediumButton } from "../components/Buttons";
import { RangeAndText } from "../components/Ranges";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
    quiz_options: QuizOptions;
    setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>;
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    setQuizProblems: React.Dispatch<React.SetStateAction<QuizProblem[]>>
}


// クイズ設定画面
function QuizOption(props: Props) {
    const [temp_problems_num, setTempProblemsNum] =
        React.useState<string>(String(props.quiz_options.problems_num));


    // クイズ難易度
    // セレクトボックス内の値を変更
    const changeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeValues<QuizOptions>(props.quiz_options, props.setQuizOptions,
            ["difficulty"], [parseInt(e.target.value)]);
    };


    // 問題数
    // レンジスライダーの値を変更
    const changeProblemsNumInRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input_str: string = e.target.value,
            input_num: number = parseInt(e.target.value);

        changeValues<QuizOptions>(props.quiz_options, props.setQuizOptions,
            ["problems_num"], [input_num]);
        setTempProblemsNum(input_str);
    };

    // テキストボックスの値を変更
    const changeProblemsNumInText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;

        // 数字のみ入力を許可
        if (/^\d*$/.test(input)) {
            setTempProblemsNum(input);
        }
    };

    // テキストボックスの値を校正
    const validateProblemsNumInText = () => {
        let input_str: string = temp_problems_num,
            input_num: number = parseInt(temp_problems_num);

        // 入力値が数字でない場合、元の値にリセット
        if (isNaN(input_num)) {
            setTempProblemsNum(String(props.quiz_options.problems_num));
            return;
        }

        input_num = limitToRange(input_num, QUIZ_OPTIONS_CONST.min_problems_num,
            QUIZ_OPTIONS_CONST.max_problems_num);
        input_num = Math.floor(input_num / QUIZ_OPTIONS_CONST.step_problems_num) * QUIZ_OPTIONS_CONST.step_problems_num;
        input_str = String(input_num);
        changeValues<QuizOptions>(props.quiz_options, props.setQuizOptions,
            ["problems_num"], [input_num]);
        setTempProblemsNum(input_str);
    };


    // クイズ開始と同時に問題作成
    const startQuiz = () => {
        props.setQuizProblems(createProblems(props.quiz_options));
        props.setCurrentQuiz(0);
    };


    return (
        <>
            <div
                className='relative flex h-32 w-full items-center 
                justify-center border-b-4 border-yellow-400/60'
            >
                <h2 className='text-4xl font-bold'>
                    クイズ設定
                </h2>
            </div>


            <div
                className="relative flex w-full flex-col items-center 
                justify-center px-8"
            >
                <div className="flex w-full items-center justify-between 
                    p-4"
                >
                    <span className="p-2 text-lg font-bold">
                        難易度
                    </span>
                    <select
                        name="sel_difficulty"
                        value={props.quiz_options.difficulty}
                        onChange={changeDifficulty}
                    >
                        <option value="0">Very Easy</option>
                        <option value="1">Easy</option>
                        <option value="2">Normal</option>
                        <option value="3">Hard</option>
                        <option value="4">Hardcore</option>
                    </select>
                </div>


                <div
                    className="flex w-full items-center justify-between 
                    p-4"
                >
                    <span className="p-2 text-lg font-bold">
                        問題数
                    </span>
                    <RangeAndText
                        min={QUIZ_OPTIONS_CONST.min_problems_num}
                        max={QUIZ_OPTIONS_CONST.max_problems_num}
                        step={QUIZ_OPTIONS_CONST.step_problems_num}
                        range_value={props.quiz_options.problems_num}
                        range_change={changeProblemsNumInRange}
                        text_value={temp_problems_num}
                        text_change={changeProblemsNumInText}
                        text_blur={validateProblemsNumInText}
                    />
                </div>

                <div
                    className="mt-8 flex w-full flex-col items-center 
                    justify-center p-4"
                >
                    <MediumButton
                        click={startQuiz}
                        text="クイズスタート"
                        animation={props.options.animation}
                    />
                </div>
            </div>


            <div
                className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center border-t-4 
                border-yellow-400/60 p-4'
            >
                <MediumButton
                    click={() => props.setScreen(SCREENS.TITLE)}
                    text='タイトルに戻る'
                    animation={props.options.animation}
                />
            </div>
        </>
    );
}


export default QuizOption;
