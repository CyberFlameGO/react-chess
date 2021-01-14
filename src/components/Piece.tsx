import React, { useState } from "react";
import Piece from "../logic/Piece";
import MousePosition from "../util/MousePosition";

interface Props {
    piece: Piece;
    mouse: MousePosition;
}

const setProp = (obj: any, key: string, value: any) => (obj[key] = value);

const PieceComponent: React.FC<Props> = ({ piece, mouse }) => {
    const size = 100;
    const imagePath = `assets/${piece.alliance}-${piece.name}.png`;
    const [active, setActive] = useState(false);

    const styles = {
        "--image": `url(${imagePath})`,
    };

    const activate = () => {
        setActive(true);
        window.addEventListener("mouseup", () => setActive(false));
    };

    if (active) {
        setProp(styles, "position", "absolute");
        setProp(styles, "top", 0);
        setProp(styles, "left", 0);
        setProp(
            styles,
            "transform",
            `translate(${mouse.x! - size / 2}px, ${mouse.y! - size / 2}px)`
        );
    } else {
        setProp(styles, "position", "static");
    }

    return (
        <div
            className="Piece"
            style={styles as React.CSSProperties}
            onMouseDown={activate}
        >
            <img src={imagePath} alt={piece.name} />
        </div>
    );
};

export default PieceComponent;
