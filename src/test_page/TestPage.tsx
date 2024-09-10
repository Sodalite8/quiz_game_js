import React from 'react';
import '../styles/tailwind.css';
import { RangeAndNumber } from '../game/components/Ranges';


function TestPage() {
    const [test, setTest] = React.useState<number>(0);


    const changeTest = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTest(parseInt(e.target.value));
    };


    return (
        <div>
            <RangeAndNumber min={0} max={20} step={1} value={test} 
                change={changeTest} blur={undefined}/>
        </div>
    );
}


export default TestPage;
