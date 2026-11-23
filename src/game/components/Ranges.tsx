// プロジェクト内で用いる汎用レンジスライダーの定義
import React from "react";


interface Props {
    min?: number | string;
    max?: number | string;
    step?: number | string;
    range_value?: number;
    range_change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    range_blur?: () => void;
    text_value?: string;
    text_change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text_blur?: () => void;
}


// レンジスライダーとテキストボックスのセット
export function RangeAndText(props: Props) {
    return (
        <div>
            <input
                type="range"
                min={props.min} max={props.max} step={props.step}
                value={props.range_value}
                onChange={props.range_change}
                onBlur={props.range_blur}
            />
            <input
                type="text"
                value={props.text_value}
                onChange={props.text_change}
                onBlur={props.text_blur}
            />
        </div>
    );
}
