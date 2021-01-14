import Piece from "../Piece";

export default class Pawn extends Piece {
    public name = "Pawn";

    public controls(x: number, y: number): boolean {
        return false;
    }
}
