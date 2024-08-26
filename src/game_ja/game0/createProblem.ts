import { INITIAL_QUIZ_PROBLEM, QuizOptions, QuizProblem } from "../../constants";
import { getRandomInt } from "../../func";


export const createProblems = (quiz_options: QuizOptions): QuizProblem[] => {
    const quiz_problems: QuizProblem[] = [];


    for (let i = 0; i < quiz_options.problems_num; i++) {
        const new_problem: QuizProblem = { ...INITIAL_QUIZ_PROBLEM, choice_ids: [ ...INITIAL_QUIZ_PROBLEM.choice_ids ] };
        new_problem.problem_id = getRandomInt(0, 99);
        new_problem.correct_choice = getRandomInt(0, 3);
        for (let j = 0; j < 4; j++) {
            if (j === new_problem.correct_choice) {
                new_problem.choice_ids.push(new_problem.problem_id);
                continue;
            }
            new_problem.choice_ids.push(getRandomInt(0, 99));
        }
        quiz_problems.push(new_problem);
    }


    return quiz_problems;
};
