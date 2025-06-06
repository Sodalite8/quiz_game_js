import React from 'react';
import { SCREENS, Options, INITIAL_OPTIONS, OPTIONS_CONST, QuizOptions, CookieKeys } from '../../_constants/constants';
import { changeValues, limitToRange } from '../../_scripts/func';
import { MediumButton, SmallButton } from '../components/Buttons';
import { RangeAndText } from '../components/Ranges';


interface Props {
    changeCookies: (key: CookieKeys, value: Options | QuizOptions) => void;
    deleteCookies: () => void;
    accept_cookies: boolean;
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
    setOptions: React.Dispatch<React.SetStateAction<Options>>;
}


// 設定画面
function Option(props: Props) {
    const [temp_effect_volume, setTempEffectVolume] =
        React.useState<string>(String(props.options.effect_volume));


    // About music volume
    // const changeMusicVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (!isNaN(parseInt(e.target.value))) {
    //         changeValues<Options>(props.options, props.setOptions,
    //             ["music_volume"], [parseInt(e.target.value)]);
    //     }
    // };
    // const validateMusicVolume = () => {
    //     validateNumber<Options>(props.options, props.setOptions, "music_volume", OPTIONS_CONST.min_volume, OPTIONS_CONST.max_volume);
    // };


    // 効果音
    // レンジスライダーの値を変更
    const changeEffectVolumeInRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input_str: string = e.target.value,
            input_num: number = parseInt(e.target.value);

        changeValues<Options>(
            props.options,
            props.setOptions,
            ["effect_volume"],
            [input_num]
        );
        if (props.accept_cookies) {
            props.changeCookies(
                'options',
                { ...props.options, effect_volume: input_num }
            );
        }
        setTempEffectVolume(input_str);
    };

    // テキストボックスの値を変更
    const changeEffectVolumeInText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;

        // 数字のみ入力を許可
        if (/^\d*$/.test(input)) {
            setTempEffectVolume(input);
        }
    };

    // テキストボックスの値を校正
    const validateEffectVolumeInText = () => {
        let input_str: string = temp_effect_volume,
            input_num: number = parseInt(temp_effect_volume);

        // 入力値が数字でない場合、元の値にリセット
        if (isNaN(input_num)) {
            setTempEffectVolume(String(props.options.effect_volume));
            return;
        }

        input_num = limitToRange(input_num, OPTIONS_CONST.min_volume,
            OPTIONS_CONST.max_volume);
        input_str = String(input_num);
        changeValues<Options>(
            props.options,
            props.setOptions,
            ["effect_volume"],
            [input_num]
        );
        if (props.accept_cookies) {
            props.changeCookies(
                'options',
                { ...props.options, effect_volume: input_num }
            );
        }
        setTempEffectVolume(input_str);
    };


    // アニメーション
    // アニメーションの有効無効の切り替え
    const enableAnimation = () => {
        changeValues<Options>(
            props.options,
            props.setOptions,
            ["animation"],
            [!props.options.animation]
        );
        if (props.accept_cookies) {
            props.changeCookies(
                'options',
                { ...props.options, animation: !props.options.animation }
            );
        }
    };


    // ゲーム設定のリセット
    const resetOptions = () => {
        const ans: boolean = window.confirm("本当にゲーム設定をリセットしますか？");
        if (ans == false) {
            return;
        }
        props.setOptions(INITIAL_OPTIONS);
    };


    return (
        <>
            <div
                className='relative flex h-32 w-full items-center 
                justify-center border-b-4 border-yellow-400/60'
            >
                <h2 className='text-4xl font-bold'>
                    ゲーム設定
                </h2>
            </div>


            <div
                className='relative flex w-full flex-col items-center 
                justify-center px-8'
            >
                <div
                    className='flex w-full flex-col items-center 
                    justify-center'
                >
                    <div
                        className='flex w-full items-center justify-center 
                        p-4'
                    >
                        <h3 className='text-2xl font-bold'>
                            音量
                        </h3>
                    </div>
                    {/* <div className='flex w-full items-center justify-between 
                        p-4'>
                        <span className='text-lg'>
                            BGM
                        </span>
                        <RangeAndNumber min={0} max={100} step={1}
                            value={props.options.music_volume}
                            change={changeMusicVolume}
                            blur={validateMusicVolume} />
                    </div> */}
                    <div
                        className='flex w-full items-center justify-between 
                        p-4'
                    >
                        <span className='text-lg'>
                            効果音
                        </span>
                        <RangeAndText
                            min={0} max={100} step={1}
                            range_value={props.options.effect_volume}
                            range_change={changeEffectVolumeInRange}
                            text_value={temp_effect_volume}
                            text_change={changeEffectVolumeInText}
                            text_blur={validateEffectVolumeInText}
                        />
                    </div>
                </div>


                <div
                    className='my-4 flex w-full flex-col items-center 
                    justify-center'
                >
                    <div
                        className='flex w-full items-center justify-center 
                        pb-4'
                    >
                        <h3 className='text-2xl font-bold'>
                            アニメーション
                        </h3>
                    </div>
                    <div>
                        アニメーションの有効化
                        <input
                            type="checkbox"
                            name="check_enable_animation"
                            checked={props.options.animation}
                            onChange={enableAnimation}
                        />
                    </div>
                </div>


                <div
                    className='mt-4 flex w-full flex-col items-center 
                    justify-center p-4'
                >
                    <SmallButton
                        text={'ゲーム設定\nリセット'}
                        click={resetOptions}
                        animation={props.options.animation}
                    />
                </div>


                <div
                    className='mt-8 flex w-full flex-col items-center 
                    justify-center p-4'
                >
                    <SmallButton
                        text={'クッキー関連\nリセット'}
                        click={props.deleteCookies}
                        animation={props.options.animation}
                    />
                </div>
            </div>


            <div
                className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center border-t-4 
                border-yellow-400/60 p-4'
            >
                <MediumButton
                    text='タイトルに戻る'
                    click={() => props.setScreen(SCREENS.TITLE)}
                    animation={props.options.animation}
                />
            </div>
        </>
    );
}


export default Option;
