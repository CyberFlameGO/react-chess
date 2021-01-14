import React, { useMemo } from "react";
import BoardComponent from "./components/Board";
import Board from "./logic/Board";

const App: React.FC = () => {
    const board = useMemo(() => new Board(), []);

    return (
        <div className="App">
            <BoardComponent board={board} />
        </div>
    );
};

export default App;
