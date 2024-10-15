// プロジェクト内で使用する定数や型定義


// 選択肢の数
export const CHOICES_NUM: number = 4;


// 解答の正誤を示す画像のパス
export const PATH_IMAGES_ANSWER_FEEDBACK = {
    correct: "./images/ui/correct_answer.svg",
    wrong: "./images/ui/wrong_answer.svg"
} as const;


// 解答の正誤を示すサウンドのパス
export const PATH_SOUNDS_ANSWER_FEEDBACK = {
    correct: "./audio/correct_answer.mp3",
    wrong: "./audio/wrong_answer.mp3"
} as const


/**
 *  スクリーン番号
 *  TITLE:  タイトル
 *  OPTION: ゲーム設定
 *  GAME0:  クイズゲーム
 *  LIST0:  図巻
 */
export const SCREENS = {
    TITLE: 0,
    OPTION: 1,
    GAME0: 10,
    LIST0: 20
} as const;


/**
 *  ゲーム設定
 *  music_volume:   BGM音量
 *  effect_volume:  効果音音量
 *  animation:      アニメーション
 */
export interface Options {
    music_volume: number;
    effect_volume: number;
    animation: boolean;
}
export const INITIAL_OPTIONS: Options = {
    music_volume: 100,
    effect_volume: 100,
    animation: true
} as const;


/**
 *  ゲーム設定定数
 *  min_volume: 最小音量
 *  max_volume: 最大音量
 */
export interface OptionsConst {
    min_volume: number;
    max_volume: number;
}
export const OPTIONS_CONST: OptionsConst = {
    min_volume: 0,
    max_volume: 100
} as const;


/**
 *  クイズ設定
 *  difficulty:     難易度
 *  problems_num:   問題数
 */
export interface QuizOptions {
    difficulty: number;
    problems_num: number;
}
export const INITIAL_QUIZ_OPTIONS: QuizOptions = {
    difficulty: 0,
    problems_num: 5
} as const;


/**
 *  クイズ設定定数
 *  min_problems_num:   最小問題数
 *  max_problems_num:   最大問題数
 */
export interface QuizOptionsConst {
    min_problems_num: number;
    max_problems_num: number;
    step_problems_num: number;
}
export const QUIZ_OPTIONS_CONST: QuizOptionsConst = {
    min_problems_num: 5,
    max_problems_num: 20,
    step_problems_num: 5
} as const;


/**
 *  問題フォーマット
 *  problem_id:     問題の旗id
 *  choice_ids:     選択肢の旗id
 *  correct_choice: 正解の選択肢のindex
 */
export interface QuizProblem {
    problem_id: number;
    choice_ids: number[];
    correct_choice: number;
}
export const INITIAL_QUIZ_PROBLEM: QuizProblem = {
    problem_id: 0,
    choice_ids: [],
    correct_choice: 0
};


/**
 *  クイズ結果
 *  score:                  スコア
 *  correct_answer_rate:    正答率
 */
export interface QuizResults {
    score: number;
    correct_answer_rate: number;
}
export const INITIAL_QUIZ_RESULTS: QuizResults = {
    score: 0,
    correct_answer_rate: 0
} as const;


/**
 *  クイズ解答
 *  answer:     解答番号
 *  correct:    正解か
 */
export interface QuizAnswer {
    answer: number;
    correct: boolean;
}
export const INITIAL_QUIZ_ANSWERS: QuizAnswer = {
    answer: -1,
    correct: false
} as const;


/**
 *  旗データフォーマット
 *  id:         旗id
 *  available:  データが有効であるか無効であるか
 *  name:       国名
 *  period:     使用されていた期間
 *  level:      旗のレベル
 *  category:   旗の分類id
 */
export interface FlagData {
    id: number;
    available: boolean,
    name: string;
    period: string;
    level: number;
    category: number;
}
export const INITIAL_FLAG_DATA: FlagData = {
    id: -1,
    available: false,
    name: "",
    period: "",
    level: -1,
    category: -1
} as const;


/**
 *  旗データ定数
 *  level_num:  レベル数
 */
export interface FlagDataConst {
    level_num: number;
}
export const FLAG_DATA_CONST: FlagDataConst = {
    level_num: 3
} as const;
