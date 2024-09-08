import React from 'react';
import { SCREENS, Options, INITIAL_OPTIONS, OPTIONS_CONST } from '../../_constants/constants';
import { changeNumber, validateNumber } from '../../_scripts/func';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}


// Game options
function Option(props: Props) {
    // About music volume
    const changeMusicVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNumber<Options>(props.options, "music_volume", e.target.value, props.setOptions);
    };
    const validateMusicVolume = () => {
        validateNumber<Options>(props.options, "music_volume", OPTIONS_CONST.min_volume, OPTIONS_CONST.max_volume, props.setOptions);
    };

    // About effect volume
    const changeEffectVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeNumber<Options>(props.options, "effect_volume", e.target.value, props.setOptions);
    };
    const validateEffectVolume = () => {
        validateNumber<Options>(props.options, "effect_volume", OPTIONS_CONST.min_volume, OPTIONS_CONST.max_volume, props.setOptions);
    };

    // About animation
    const enableAnimation = () => {
        const new_options: Options = { ...props.options, animation: !props.options.animation };
        props.setOptions(new_options);
    };
    
    // Reset game options
    const resetOptions = () => {
        const ans: boolean = window.confirm("本当にリセットしますか？");
        if (ans == false) {
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
                        <input type="range" name="ran_music_volume" min="0" max="100" step="1" value={props.options.music_volume} onChange={changeMusicVolume}></input>
                        <input type="number" name="num_music_volume" min="0" max="100" step="1" value={props.options.music_volume} onChange={changeMusicVolume} onBlur={validateMusicVolume}></input>
                    </div>
                    <div>
                        効果音
                        <input type="range" name="ran_effect_volume" min="0" max="100" step="1" value={props.options.effect_volume} onChange={changeEffectVolume}></input>
                        <input type="number" name="num_effect_volume" min="0" max="100" step="1" value={props.options.effect_volume} onChange={changeEffectVolume} onBlur={validateEffectVolume}></input>
                    </div>
                </div>
                <div>
                    アニメーション
                    <div>
                        アニメーションの有効化
                        <input type="checkbox" name="check_enable_animation" checked={props.options.animation} onChange={enableAnimation}></input>
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
