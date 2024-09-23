import React from 'react';
import { Options, SCREENS } from '../../_constants/constants';
import { CategoryButton, MediumButton } from '../components/Buttons';
import { CATEGORIES_LIST, CATEGORIES_NUM } from '../scripts/readFlagData';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    options: Options;
}


// Old flags` lists
function List0(props: Props) {
    const [current_category, setCurrentCategory] = React.useState<number>(-1);


    const category_buttons = CATEGORIES_LIST.map((value, index) => {
        return (
            <CategoryButton
                key={index}
                text={value}
                animation={props.options.animation}
                click={() => setCurrentCategory(index)} />
        );
    });


    const renderList = () => {
        if (current_category === -1) {
            return (
                <>
                    <div
                        className='relative flex h-32 w-full items-center 
                        justify-center border-b-4 border-yellow-400/60'>
                        <h2 className='text-center text-4xl font-bold'>
                            分類を選択
                        </h2>
                    </div>

                    <div className='flex w-full justify-center'>
                        <div className='grid grid-cols-2 gap-x-8 gap-y-4 p-4'>
                            {category_buttons}
                        </div>
                    </div>



                    <div
                        className='absolute top-full flex w-full 
                        -translate-y-full flex-col items-center 
                        justify-center border-t-4 border-yellow-400/60'>
                        <div
                            className='flex w-full items-center justify-center 
                            py-4'>
                            <MediumButton
                                text='タイトルに戻る'
                                animation={props.options.animation}
                                click={() => props.setScreen(SCREENS.TITLE)} />
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
                        justify-center border-b-4 border-yellow-400/60'>
                        <h2 className='text-center text-4xl font-bold'>
                            旗を選択
                        </h2>
                    </div>


                    <div>

                    </div>


                    <div
                        className='absolute top-full flex w-full 
                        -translate-y-full flex-col items-center 
                        justify-center border-t-4 border-yellow-400/60'>
                        <div
                            className='flex w-full items-center justify-center 
                            py-4'>
                            <MediumButton
                                text='分類選択に戻る'
                                animation={props.options.animation}
                                click={() => setCurrentCategory(-1)} />
                        </div>
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
