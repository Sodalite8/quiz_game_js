import Modal from "react-modal";
import { FlagData } from "../../_constants/constants";
import { SmallButton } from "./Buttons";
import { FLAG_DATA_LIST } from "../scripts/readFlagData";


interface Props {
    flag_id: number;
    closeFlagScreen: () => void;
    flag_selected: boolean;
    animation: boolean;
}


// 旗の情報をモーダルウィンドウで表示
function FlagScreen(props: Props) {
    const flag_data: FlagData = FLAG_DATA_LIST[props.flag_id];


    return (
        <Modal
            isOpen={props.flag_selected}
            onRequestClose={props.closeFlagScreen}
            ariaHideApp={false}
            className="relative mx-auto my-16 box-content flex h-flagscreen-h 
            w-flagscreen-w flex-col items-center rounded-lg border-4 
            border-yellow-400/60 bg-yellow-50"
        >
            <div className="flex w-full items-center justify-center p-8">
                <img
                    className="gold-border silver-bg h-flagscreen-flag-h object-cover"
                    src={`./images/flags/flag${flag_data.id}.png`}
                    alt="flag"
                />
            </div>
            <div className="flex w-full items-center justify-center p-8">
                <h2 className="text-center text-4xl font-bold">
                    {flag_data.name} ({flag_data.period})
                </h2>
            </div>


            <div className="absolute top-full flex w-full -translate-y-full 
                items-center justify-center border-t-4 border-yellow-400/60 
                p-4"
            >
                <SmallButton
                    text='戻る'
                    click={props.closeFlagScreen}
                    animation={props.animation}
                />
            </div>
        </Modal>
    );
}


export default FlagScreen;
