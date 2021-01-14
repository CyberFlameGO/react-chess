import React from "react";
import { _Piece } from "../logic/Piece";
import MousePosition from "../util/MousePosition";
import PieceComponent from "./Piece";

export enum TileColor {
    Light = "light",
    Dark = "dark",
}

interface Props {
    color: TileColor;
    piece: _Piece;
    mouse: MousePosition;
}

const Tile: React.FC<Props> = ({ color, piece, mouse }) => {
    let _piece = null;

    if (piece !== null) {
        _piece = <PieceComponent piece={piece} mouse={mouse} />;
    }

    return <div className={`Tile ${color}`}>{_piece}</div>;
};

export default Tile;
