import React from 'react';
import { Options, SCREENS } from '../../_constants/constants';
import { MediumButton } from '../components/Buttons';
import { CATEGORIES_NUM } from '../scripts/readFlagData';
import CategorySelect from '../list/CategorySelect';
import FlagSelect from '../list/FlagSelect';
import FlagScreenSection from '../list/FlagScreenSection';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
}


// Old flags` lists
function List0(props: Props) {
    const [current_category, setCurrentCategory] = React.useState<number>(-1);
    const [current_flag, setCurrentFlag] = React.useState<number>(-1);
    const [flag_selected, setFlagSelected] = React.useState<boolean>(false);


    const renderList = () => {
        if (current_category === -1) {
            return (
                <>
                    <div
                        className='relative flex h-32 w-full items-center 
                        justify-center border-b-4 border-yellow-400/60'
                    >
                        <h2 className='text-center text-4xl font-bold'>
                            分類を選択
                        </h2>
                    </div>


                    <div className='flex max-h-center-h flex-col items-center 
                        overflow-auto'
                    >
                        <CategorySelect
                            options={props.options}
                            setCurrentCategory={setCurrentCategory}
                        />
                    </div>


                    <div
                        className='absolute top-full flex w-full 
                        -translate-y-full flex-col items-center 
                        justify-center border-t-4 border-yellow-400/60'
                    >
                        <div
                            className='flex w-full items-center justify-center 
                            py-4'
                        >
                            <MediumButton
                                text='タイトルに戻る'
                                click={() => props.setScreen(SCREENS.TITLE)}
                                animation={props.options.animation}
                            />
                        </div>
                    </div>
                </>
            );
        }


        else if (current_category > -1 && current_category < CATEGORIES_NUM) {
            return (
                <>
                    <div
                        className='relative flex h-32 w-full items-center 
                        justify-center border-b-4 border-yellow-400/60'
                    >
                        <h2 className='text-center text-4xl font-bold'>
                            旗を選択
                        </h2>
                    </div>


                    <div className='flex max-h-center-h flex-col items-center 
                        overflow-auto'
                    >
                        <FlagSelect
                            options={props.options}
                            current_category={current_category}
                            setCurrentFlag={setCurrentFlag}
                            flag_selected={flag_selected}
                            setFlagSelected={setFlagSelected}
                        />
                    </div>


                    <div
                        className='absolute top-full flex w-full 
                        -translate-y-full flex-col items-center 
                        justify-center border-t-4 border-yellow-400/60'
                    >
                        <div
                            className='flex w-full items-center justify-center 
                            py-4'
                        >
                            <MediumButton
                                text='分類選択に戻る'
                                disable={flag_selected}
                                click={() => setCurrentCategory(-1)}
                                animation={props.options.animation}
                            />
                        </div>
                    </div>


                    <div>
                        <FlagScreenSection
                            options={props.options}
                            current_flag={current_flag}
                            setCurrentFlag={setCurrentFlag}
                            flag_selected={flag_selected}
                            setFlagSelected={setFlagSelected}
                        />
                    </div>
                </>
            );
        }


        else {
            return (
                <>
                    <h2>不正な分類番号に設定されています</h2>
                    <button onClick={() => { props.setScreen(SCREENS.TITLE) }} />
                </>
            );
        }
    };


    return (
        <>
            {renderList()}
        </>
    );
}


export default List0;
