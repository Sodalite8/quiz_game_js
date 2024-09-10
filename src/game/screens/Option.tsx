import React from 'react';
import { SCREENS, Options, INITIAL_OPTIONS, OPTIONS_CONST } from '../../_constants/constants';
import { changeNumber, validateNumber } from '../../_scripts/func';
import { MediumButton, SmallButton } from '../components/Buttons';
import { RangeAndNumber } from '../components/Ranges';


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
    // const enableAnimation = () => {
    //     const new_options: Options = { ...props.options, animation: !props.options.animation };
    //     props.setOptions(new_options);
    // };


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
            <div className='relative flex h-32 w-full items-center 
                justify-center border-b-4 border-yellow-400/60'>
                <h2 className='text-4xl font-bold'>
                    ゲーム設定
                </h2>
            </div>


            <div className='relative flex w-full flex-col 
                items-center justify-center p-4'>
                <div className='flex w-full flex-col 
                    items-center justify-center'>
                    <div className='flex w-full items-center justify-center p-4'>
                        <h3 className='text-2xl font-bold'>
                            音量
                        </h3>
                    </div>
                    <div className='flex w-full items-center justify-between p-4'>
                        <span className='block'>
                            BGM
                        </span>
                        <RangeAndNumber min={0} max={100} step={1}
                            value={props.options.music_volume}
                            change={changeMusicVolume}
                            blur={validateMusicVolume} />
                    </div>
                    <div className='flex w-full items-center justify-between p-4'>
                        <span className='block'>
                            効果音
                        </span>
                        <RangeAndNumber min={0} max={100} step={1}
                            value={props.options.effect_volume}
                            change={changeEffectVolume}
                            blur={validateEffectVolume} />
                    </div>
                </div>


                {/* <div className='my-4 flex w-full flex-col 
                    items-center justify-center'>
                    <div className='flex w-full items-center justify-center pb-4'>
                        <h3 className='text-2xl font-bold'>
                            アニメーション
                        </h3>
                    </div>
                    <div>
                        アニメーションの有効化
                        <input type="checkbox" name="check_enable_animation"
                            checked={props.options.animation}
                            onChange={enableAnimation} />
                    </div>
                </div> */}


                <div className='mt-8 flex w-full flex-col items-center 
                    justify-center p-4'>
                    <SmallButton
                        click={resetOptions}
                        text={'ゲーム設定\nリセット'} />
                </div>
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center border-t-4 
                border-yellow-400/60 p-4'>
                <MediumButton
                    click={() => props.setScreen(SCREENS.TITLE)}
                    text='タイトルに戻る' />
            </div>
        </>
    );
}


export default Option;
