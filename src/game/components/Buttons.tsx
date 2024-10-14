// プロジェクト内で用いる汎用ボタンの定義
import React from "react";


// str内の改行文字がある位置でで改行を行う
const insertLineBreak = (str: string | undefined) => {
    if (str === undefined) {
        return null;
    }

    const strs = (str as string).split('\n').map((item, index) => {
        return (
            <React.Fragment key={index}>
                {item}<br />
            </React.Fragment>
        );
    });
    return strs;
};


interface Props {
    text?: string;
    disable?: boolean;
    click?: () => void;
    animation?: boolean;
}


// 小さめのボタン
// メニューなどの下端にあるボタンとして使用
export function SmallButton(props: Props) {
    return (
        <button
            className={`${props.animation ? "animation-button" : ""} 
            m-2 block w-small-btn-w cursor-pointer rounded-lg border-2 
            border-orange-300 bg-orange-400 p-1 text-lg font-bold 
            text-white`}
            disabled={props.disable}
            onClick={props.click}
        >
            {insertLineBreak(props.text)}
        </button>
    );
}


// 中くらいのボタン
// メニューなどの設定用のボタンとして使用
export function MediumButton(props: Props) {
    return (
        <button
            className={`${props.animation ? "animation-button" : ""} 
            m-4 block w-medium-btn-w cursor-pointer rounded-lg border-2 
            border-orange-300 bg-orange-400 p-2 text-xl font-bold 
            text-white`}
            disabled={props.disable}
            onClick={props.click}
        >
            {insertLineBreak(props.text)}
        </button>
    );
}


// 大きめのボタン
// タイトルで使用
export function LargeButton(props: Props) {
    return (
        <button
            className={`${props.animation ? "animation-button" : ""} 
            m-8 block w-large-btn-w cursor-pointer rounded-lg border-2 
            border-orange-300 bg-orange-400 p-4 text-2xl font-bold 
            text-white`}
            disabled={props.disable}
            onClick={props.click}
        >
            {insertLineBreak(props.text)}
        </button>
    );
}


// 図鑑の分類選択で使用
export function CategoryButton(props: Props) {
    return (
        <button
            className={`${props.animation ? "animation-button" : ""} 
            m-2 block h-category-btn-h w-category-btn-w cursor-pointer 
            rounded-lg border-2 border-orange-300 bg-orange-400 p-2 
            text-xl font-bold text-white`}
            disabled={props.disable}
            onClick={props.click}
        >
            {insertLineBreak(props.text)}
        </button>
    );
}


interface Props1 {
    text?: string;
    name?: string;
    disable?: boolean;
    click?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    animation?: boolean;
}


// クイズの解答ボタンとして使用
export function AnswerButton(props: Props1) {
    return (
        <button
            className={`${props.animation ? "animation-button" : ""} 
            m-2 block h-answer-btn-h w-answer-btn-w cursor-pointer 
            rounded-lg border-2 border-orange-300 bg-orange-400 p-2 
            text-xl font-bold text-white`}
            name={props.name}
            disabled={props.disable}
            onClick={props.click}
        >
            {insertLineBreak(props.text)}
        </button>
    );
}


// 図鑑の旗選択で使用
export function FlagButton(props: Props1) {
    return (
        <button
            className={`${props.animation ? "animation-button" : ""} 
            m-2 flex h-flag-btn-h w-flag-btn-w cursor-pointer flex-col 
            items-center justify-between rounded-lg border-2 
            border-orange-300 bg-orange-400 p-4`}
            name={props.name}
            disabled={props.disable}
            onClick={props.click}
        >
            <img
                className="gold-border silver-bg h-flag-btn-flag-h object-cover"
                src={`./images/flags/flag${props.name}.png`}
                alt="flag"
            />
            <span className="text-xl font-bold text-white">
                {insertLineBreak(props.text)}
            </span>
        </button>
    );
}
