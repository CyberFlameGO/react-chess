import Alliance from "./Alliance";
import Board from "./Board";

export type _Piece = Piece | null;

export default abstract class Piece {
    public abstract name: string;

    public x: number;
    public y: number;
    public alliance: Alliance;

    private board: Board;

    constructor(board: Board, x: number, y: number, alliance: Alliance) {
        this.x = x;
        this.y = y;
        this.alliance = alliance;
        this.board = board;
        this.board.pieces[y][x] = this;
    }

    public move(x: number, y: number) {
        const tilePiece = this.board.pieces[y][x];

        if (
            this.controls(x, y) &&
            (tilePiece === null || tilePiece.alliance !== this.alliance)
        ) {
            this.board.pieces[this.y][this.x] = null;
            this.board.pieces[y][x] = this;
            this.x = x;
            this.y = y;
        }
    }

    public abstract controls(x: number, y: number): boolean;
}
