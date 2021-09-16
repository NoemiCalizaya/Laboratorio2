import LogicGame from "./LogicGame";

class OneCard extends LogicGame {
    process(twice, item, score, stateBoard, setStateBoard) {
        if (twice.length === 0) {
            twice.push(item);
        } else {
            this.next.process(twice, item, score, stateBoard, setStateBoard);
        }
        const newStateBoard = stateBoard.map((loop) => {
            if (loop.id === item.id) {
                loop.state = true;
                loop.styles = "flex-container .disablediv";
            }
            return loop;
        });
        setStateBoard(newStateBoard);
    }
}
export default OneCard;