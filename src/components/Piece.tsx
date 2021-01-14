import React from "react";
import Piece from "../logic/Piece";

interface Props {
    piece: Piece;
}

const PieceComponent: React.FC<Props> = ({ piece }) => {
    const image = `assets/${piece.alliance}-${piece.name}.png`;
    return (
        <div
            className="Piece"
            style={{
                ["--image" as any]: `url(${image})`,
            }}
        >
            <img src={image} alt={piece.name} />
        </div>
    );
};

export default PieceComponent;
