import { QuizOptions, QuizProblem } from "../../_constants/constants";
import { fisherYatesShuffle, getRandomInt } from "../../_scripts/func";
import { FLAG_DATA_LIST, FLAG_DATA_LIST_BY_CATEGORY, FLAG_DATA_LIST_BY_LEVEL } from "./readFlagData";


// arr内にstrと一致する要素が存在した場合true、しない場合falseを返す
const existSameNameInArray = (str: string, arr: string[]): boolean => {
    arr.forEach((value) => {
        if (str === value) {
            return true;
        }
    });
    return false;
};


// 問題を作成
export const createProblems = (quiz_options: QuizOptions): QuizProblem[] => {
    // レベル番号ごとの出題数
    const problems_num_by_level: number[] = Array(3).fill(0);


    /**
     *  クイズ設定の難易度によって、
     *  全出題数に対するレベル番号ごとの出題数の割合を変化させることで、
     *  問題の難易度を調整
     */
    switch (quiz_options.difficulty) {
        case 0:     // Very Easy
            problems_num_by_level[0] = quiz_options.problems_num;
            break;


        case 1:     // Easy
            problems_num_by_level[0] = Math.floor(quiz_options.problems_num * 0.6);
            problems_num_by_level[1] = quiz_options.problems_num - (problems_num_by_level[0] + problems_num_by_level[2]);
            break;


        case 2:     // Normal
            problems_num_by_level[1] = Math.floor(quiz_options.problems_num * 0.6);
            problems_num_by_level[0] = Math.floor(quiz_options.problems_num * 0.2);
            problems_num_by_level[2] = quiz_options.problems_num - (problems_num_by_level[0] + problems_num_by_level[1]);
            break;


        case 3:     // Hard
            problems_num_by_level[2] = Math.floor(quiz_options.problems_num * 0.6);
            problems_num_by_level[1] = quiz_options.problems_num - (problems_num_by_level[0] + problems_num_by_level[2]);
            break;


        case 4:     // Hardcore
            problems_num_by_level[2] = quiz_options.problems_num;
            break;


        default:
            throw new Error("Error: Difficulty is invalid.");
    }


    // レベル別idリスト
    // 分類別idリスト
    const flag_ids_by_level: number[][] = FLAG_DATA_LIST_BY_LEVEL.map(list => { return list.map(value => value.id); });
    const flag_ids_by_category: number[][] = FLAG_DATA_LIST_BY_CATEGORY.map(list => { return list.map(value => value.id); });


    // 出題する旗のidリスト
    let problem_ids: number[] = Array(quiz_options.problems_num).fill(0), k: number = 0;
    /**
     *  各レベル番号の個数分、旗のidを無作為に、重複なしに選択する
     *  旗の数が足りない場合、id0が不足分入れられ、エラーを回避
     */
    flag_ids_by_level.forEach((list, i) => {
        const shuffled_list: number[] = fisherYatesShuffle<number>(list).slice(0, problems_num_by_level[i]);
        shuffled_list.forEach(value => {
            problem_ids[k++] = value;
        })
    })
    // 完成したリストを最後にシャッフル
    problem_ids = fisherYatesShuffle<number>(problem_ids);


    // 正答となる選択肢を4択の中から無作為に指定
    const correct_choices: number[] = Array.from(Array(quiz_options.problems_num), () => getRandomInt(0, 3));


    // 各問題の選択肢を、分類が同じ旗の中から無作為に指定
    const choice_ids_list: number[][] = Array.from(Array(quiz_options.problems_num), () => Array(4).fill(0));
    problem_ids.forEach((value, i) => {
        const shuffled_list: number[] = fisherYatesShuffle<number>(flag_ids_by_category[FLAG_DATA_LIST[value].category]);
        let k = 0;
        for (let j = 0; j < 4; j++) {
            if (j === correct_choices[i]) {
                choice_ids_list[i][j] = problem_ids[i];
                continue;
            }

            // 国名が一致する選択肢が同一問題中に同時に現れないように、スキップ
            while ((FLAG_DATA_LIST[shuffled_list[k]].name === FLAG_DATA_LIST[problem_ids[i]].name) || existSameNameInArray(FLAG_DATA_LIST[shuffled_list[k]].name, Array.from(Array(j), (_, ii) => FLAG_DATA_LIST[choice_ids_list[i][ii]].name))) {
                k++;
            }
            choice_ids_list[i][j] = shuffled_list[k++];
        }
    })


    // 問題のid、問題の選択肢、正答の選択肢を1つのオブジェクトにまとめる
    const quiz_problems: QuizProblem[] = problem_ids.map((value, i) => {
        return {
            problem_id: value,
            choice_ids: [...choice_ids_list[i]],
            correct_choice: correct_choices[i]
        };
    });


    return quiz_problems;
};
