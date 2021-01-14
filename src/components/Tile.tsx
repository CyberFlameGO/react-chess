import React from "react";
import { _Piece } from "../logic/Piece";
import PieceComponent from "./Piece";

export enum TileColor {
    Light = "light",
    Dark = "dark",
}

interface Props {
    color: TileColor;
    piece: _Piece;
}

const Tile: React.FC<Props> = ({ color, piece }) => {
    let _piece = null;

    if (piece !== null) {
        _piece = <PieceComponent piece={piece} />;
    }

    return <div className={`Tile ${color}`}>{_piece}</div>;
};

export default Tile;
