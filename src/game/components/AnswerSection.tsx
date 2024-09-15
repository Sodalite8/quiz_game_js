import React from "react";
import { QuizProblem, QuizResults } from "../../_constants/constants";
import { changeNumber, waitFor } from "../../_scripts/func";
import { FLAG_DATA_LIST } from "../scripts/readFlagData";
import { AnswerButton } from "./Buttons";
import useSound from "use-sound";


interface Props {
    current_quiz: number;
    setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
    quiz_problems: QuizProblem[];
    quiz_results: QuizResults;
    setQuizResults: React.Dispatch<React.SetStateAction<QuizResults>>;
}


// Place the buttons to answer the problems
function AnswerSection(props: Props) {
    const [answered, setAnswered] = React.useState<boolean>(false);
    const [correct, setCorrect] = React.useState<boolean>(false);
    const [playCorrectAnswer] = useSound("./audio/correct_answer.mp3"),
        [plyaWrongAnswer] = useSound("./audio/wrong_answer.mp3");


    const answerProblem = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const ans = parseInt(e.currentTarget.name);

        if (ans === props.quiz_problems[props.current_quiz].correct_choice) {
            changeNumber(props.quiz_results, "score", props.quiz_results.score + 1, props.setQuizResults);
            setCorrect(true);
            playCorrectAnswer();
        }
        else {
            plyaWrongAnswer();
        }
        setAnswered(true);
        await waitFor(1000);

        setAnswered(false);
        setCorrect(false);
        props.setCurrentQuiz(props.current_quiz + 1);
    };


    const answer_buttons = props.quiz_problems[props.current_quiz].choice_ids.map((id, index) => {
        return (
            <>
                <AnswerButton key={4 * props.current_quiz + index} 
                    text={`${FLAG_DATA_LIST[id].name}(${FLAG_DATA_LIST[id].period})`} 
                    name={String(index)} 
                    disable={answered} 
                    click={answerProblem} />
            </>
        );
    });


    return (
        <div className="relative flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {answer_buttons}
            </div>
            <div className="absolute">
                {answered &&
                    <img className="size-64"
                        src={((correct) ? "./images/ui/correct.svg" : "./images/ui/incorrect.svg")}
                        alt="result_img" />}
            </div>
        </div>

    );
}


export default AnswerSection;
