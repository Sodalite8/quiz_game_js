import { INITIAL_QUIZ_PROBLEM, QuizOptions, QuizProblem } from "../../constants";
import { fisherYatesShuffle, getRandomInt } from "../../func";
import flags_data_json from "../flags/flags.json";


interface FlagsData {
    id: number;
    name: string;
    from: number;
    to: number;
}


export const createProblems = (quiz_options: QuizOptions): QuizProblem[] => {
    const quiz_problems: QuizProblem[] = [];
    const flags_data: FlagsData[] = [...flags_data_json] as FlagsData[];
    const flag_ids: number[] = flags_data.map((value) => {
        return value.id;
    });


    const problem_ids: number[] = fisherYatesShuffle<number>(flag_ids).slice(0, quiz_options.problems_num),
    choice_ids: number[] = fisherYatesShuffle<number>(flag_ids);

    let index = 0;
    for (let i = 0; i < quiz_options.problems_num; i++) {
        const new_problem: QuizProblem = { ...INITIAL_QUIZ_PROBLEM, choice_ids: [...INITIAL_QUIZ_PROBLEM.choice_ids] }
        new_problem.correct_choice = getRandomInt(0, 3);
        new_problem.problem_id = problem_ids[i];
        for (let j = 0; j < 4; j++) {
            if (j === new_problem.correct_choice) {
                new_problem.choice_ids.push(new_problem.problem_id);
                continue;
            }

            while (choice_ids[index] === new_problem.problem_id) {
                index++;
            }
            new_problem.choice_ids.push(choice_ids[index++]);
        }
        quiz_problems.push(new_problem);
    }


    return quiz_problems;
};
