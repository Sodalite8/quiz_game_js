import React, { useState } from 'react';
import './App.css';
import { SCREENS } from "./constants";
import Title from "./game_ja/title";


function App() {
    const [screen, setScreen] = useState<number>(SCREENS.TITLE);
    const renderScreen = () => {
        switch(screen) {
            case SCREENS.TITLE:
                return <Title screen={screen} setScreen={setScreen}/>;
            case SCREENS.OPTION:
                return <></>;
            case SCREENS.MENU0:
                return <></>;
            case SCREENS.GAME0:
                return <></>;
        }
    };


    return (
        <>
        {renderScreen()};
        </>
    );
}


export default App;
