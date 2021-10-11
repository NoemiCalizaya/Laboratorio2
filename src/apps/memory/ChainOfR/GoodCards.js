import LogicGame from "./LogicGame";

class GoodCards extends LogicGame {
    process(twice, item, stateScore, setStateScore, stateBoard, setStateBoard) {
        stateScore += 25;
        console.log(stateScore);
        const [item1, item2] = twice;
        const newStateBoard = stateBoard.map((item) => {
        if(item.id === item1.id || item.id === item2.id) {
            item.done = true;
        }
        return item;
        });
        setStateBoard(newStateBoard);
        setStateScore(stateScore);
    }
}
export default GoodCards;