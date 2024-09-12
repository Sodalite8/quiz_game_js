import React from "react";


interface Props {
    min?: number | string;
    max?: number | string;
    step?: number | string;
    value?: number | string;
    change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    blur?: () => void;
}


export function RangeAndNumber(props: Props) {
    return (
        <div>
            <input type="range" className="[&>] h-4 
                w-64 cursor-pointer 
                appearance-none rounded-lg border-2 border-orange-400/60 bg-transparent accent-orange-400" 
                min={props.min} max={props.max} step={props.step} 
                value={props.value} 
                onChange={props.change} />
            <input type="number" className="" 
                min={props.min} max={props.max} step={props.step} 
                value={props.value} 
                onChange={props.change} onBlur={props.blur} />
        </div>
    );
}
