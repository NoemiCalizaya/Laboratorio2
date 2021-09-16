import LogicGame from "./LogicGame";

class GoodCards extends LogicGame {
    process(twice, item, score, stateBoard, setStateBoard) {
        const [item1, item2] = twice;
        const newStateBoard = stateBoard.map((item) => {
        if(item.id === item1.id || item.id === item2.id) {
            item.done = true;
            score = score + 25;
        }
        return item;
        });
        setStateBoard(newStateBoard);
    }
}
export default GoodCards;