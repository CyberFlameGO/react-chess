import { createMatrix } from "../util/createMatrix";
import Alliance from "./Alliance";
import { _Piece } from "./Piece";
import Pawn from "./pieces/Pawn";

export default class Board {
    public pieces: Array<Array<_Piece>>;

    constructor() {
        this.pieces = createMatrix<_Piece>(8, 8, null);

        for (let x = 0; x < 8; x++) {
            new Pawn(this, x, 1, Alliance.White);
            new Pawn(this, x, 6, Alliance.Black);
        }
    }
}
