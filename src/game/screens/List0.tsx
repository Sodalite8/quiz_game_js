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
            <div className='relative flex h-32 w-full items-center 
                justify-center border-b-4 border-yellow-400/60'>
                <h2 className='text-4xl font-bold'>
                    図鑑
                </h2>
            </div>

            
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
