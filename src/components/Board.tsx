import React from "react";
import Tile, { TileColor } from "./Tile";
import "./Board.scss";
import Board from "../logic/Board";
import { _Piece } from "../logic/Piece";

interface Props {
    board: Board;
}

const BoardComponent: React.FC<Props> = ({ board }) => {
    return (
        <div className="Board">
            {board.pieces.map((_, y) => {
                return (
                    <div className="row" key={y}>
                        {board.pieces[y].map((piece: _Piece, x: number) => {
                            const color =
                                ((y % 2) + (x % 2)) % 2 === 0
                                    ? TileColor.Light
                                    : TileColor.Dark;

                            return <Tile color={color} piece={piece} key={x} />;
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default BoardComponent;
