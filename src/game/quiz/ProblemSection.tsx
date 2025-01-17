import { QuizProblem } from '../../_constants/constants';


interface Props {
    current_quiz: number
    quiz_problems: QuizProblem[];
}


// 問題表示セクション
function ProblemSection(props: Props) {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex w-full items-center justify-center p-4'>
                <h3 className='text-2xl font-bold'>
                    問題{props.current_quiz + 1}
                </h3>
            </div>


            <div className='flex w-full items-center justify-center'>
                <img
                    className='gold-border silver-bg h-flag-h object-cover'
                    src={`./images/flags/flag${props.quiz_problems[props.current_quiz].problem_id}.png`}
                    alt="problem_img"
                />
            </div>
        </div>
    );
}


export default ProblemSection;
