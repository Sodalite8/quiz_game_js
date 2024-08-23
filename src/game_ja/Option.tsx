import React from 'react';
import { SCREENS, Options, INITIAL_OPTIONS } from "../constants";


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}

function Option(props: Props) {
    const changeMusicVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const new_options: Options = {...props.options, music_volume: parseInt(e.target.value)};
        props.setOptions(new_options);
    };
    const changeEffectVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const new_options: Options = {...props.options, effect_volume: parseInt(e.target.value)};
        props.setOptions(new_options);
    };
    const enableAnimation = () => {
        const new_options: Options = {...props.options, animation: !props.options.animation};
        props.setOptions(new_options);
    };
    const resetOptions = () => {
        const ans: boolean = window.confirm("本当にリセットしますか？");
        if(ans == false) {
            return;
        }
        props.setOptions(INITIAL_OPTIONS);
    };


    return (
        <>
        <h2 className="option_text">設定</h2>
        <div className='options'>
            <div>
                音量
                <div>
                    BGM
                    <input type="range" name="music_volume" min="0" max="100" step="1" value={props.options.music_volume} onChange={changeMusicVolume}></input>
                    <input type="number" name="music_volume" min="0" max="100" step="1" value={props.options.music_volume} onChange={changeMusicVolume}></input>
                </div>
                <div>
                    効果音
                    <input type="range" name="effect_volume" min="0" max="100" step="1" value={props.options.effect_volume} onChange={changeEffectVolume}></input>
                    <input type="number" name="music_volume" min="0" max="100" step="1" value={props.options.effect_volume} onChange={changeEffectVolume}></input>
                </div>
            </div>
            <div>
                アニメーション
                <div>
                    アニメーションの有効化
                    <input type="checkbox" name="enable_animation" checked={props.options.animation} onChange={enableAnimation}></input>
                </div>
            </div>
            <div>
                <button onClick={resetOptions}>設定のリセット</button>
            </div>
        </div>
        <div>
            <button onClick={() => props.setScreen(SCREENS.TITLE)}>タイトルに戻る</button>
        </div>
        </>
    );
}

export default Option;
