import React, { useState } from 'react';
import { SCREENS } from "./constants";
import './css/App.css';
import Title from "./game_ja/title";
import Option from "./game_ja/option"
import Menu0 from './game_ja/menu0';
import Menu1 from "./game_ja/menu1";


function App() {
    const [screen, setScreen] = useState<number>(SCREENS.TITLE);
    const renderScreen = () => {
        switch(screen) {
            case SCREENS.TITLE:
                return <Title screen={screen} setScreen={setScreen}/>;
            case SCREENS.OPTION:
                return <Option screen={screen} setScreen={setScreen}/>;
            case SCREENS.MENU0:
                return <Menu0 screen={screen} setScreen={setScreen}/>;
            case SCREENS.MENU1:
                return  <Menu1 screen={screen} setScreen={setScreen}/>;
            case SCREENS.GAME0:
                return;
        }
    };


    return (
        <>
        {renderScreen()}
        </>
    );
}


export default App;
