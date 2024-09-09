import React from 'react';
import { SCREENS } from '../../_constants/constants';
import MediumButton from '../components/MediumButton';


interface Props {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
}


// Old flags` lists
function List0(props: Props) {
    return (
        <>
            <h2>分類を選択（工事中）</h2>
            <div>
                
            </div>


            <div className='absolute top-full flex w-full -translate-y-full 
                flex-col items-center justify-center border-t-4 
                border-yellow-400/60'>
                <div className='flex w-full items-center justify-center py-4'>
                    <MediumButton 
                        btn_func={() => props.setScreen(SCREENS.TITLE)} 
                        btn_name='タイトルに戻る' />
                </div>
            </div>
        </>
    );
}


export default List0;
