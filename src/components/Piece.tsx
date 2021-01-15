import React, { useEffect, useState } from "react";
import Piece from "../logic/Piece";
import MousePosition from "../util/MousePosition";

interface Props {
    piece: Piece;
    mouse: MousePosition;
}

const setProp = (obj: any, key: string, value: any) => (obj[key] = value);

const PieceComponent: React.FC<Props> = ({ piece, mouse }) => {
    const tileSize = 100;
    const imagePath = `assets/${piece.alliance}-${piece.name}.png`;
    const [active, setActive] = useState(false);
    const [move, setMove] = useState(false);
    const [display, setDisplay] = useState("block");

    const styles = {
        "--image": `url(${imagePath})`,
        display,
    };

    const activate = () => {
        setActive(true);

        const onMouseUp = () => {
            setActive(false);
            setMove(true);
            setDisplay("none");
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mouseup", onMouseUp);
    };

    useEffect(() => {
        if (move) {
            const x = Math.round((mouse.x! - tileSize / 2) / tileSize);
            const y = Math.round((mouse.y! - tileSize / 2) / tileSize);

            if (piece.x === x && piece.y === y) {
                setDisplay("block");
            }

            piece.move(x, y);
            setMove(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [move]);

    if (active) {
        setProp(styles, "position", "absolute");
        setProp(
            styles,
            "transform",
            `translate(${mouse.x! - tileSize / 2}px, ${
                mouse.y! - tileSize / 2
            }px)`
        );
    } else if (!move) {
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
