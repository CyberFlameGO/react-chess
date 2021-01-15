import React, { useEffect, useRef, useState } from "react";
import Tile, { TileColor } from "./Tile";
import "./Board.scss";
import Board from "../logic/Board";
import { _Piece } from "../logic/Piece";
import MousePosition from "../util/MousePosition";

interface Props {
    board: Board;
}

const BoardComponent: React.FC<Props> = ({ board }) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: null,
        y: null,
    });

    const boardRef = useRef<HTMLDivElement>();

    const updateMousePosition = (event: MouseEvent) => {
        const bounds = boardRef.current?.getBoundingClientRect();

        const x = event.clientX - bounds!.left;
        const y = event.clientY - bounds!.top;

        setMousePosition({ x, y });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
    }, []);

    return (
        <div className="Board" ref={boardRef as any}>
            {board.pieces.map((_, y) => {
                return (
                    <div className="row" key={y}>
                        {board.pieces[y].map((piece: _Piece, x: number) => {
                            const color =
                                ((y % 2) + (x % 2)) % 2 === 0
                                    ? TileColor.Light
                                    : TileColor.Dark;

                            return (
                                <Tile
                                    color={color}
                                    piece={piece}
                                    key={x}
                                    mouse={mousePosition}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default BoardComponent;
