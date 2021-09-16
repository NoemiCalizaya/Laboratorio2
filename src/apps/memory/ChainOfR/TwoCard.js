import LogicGame from "./LogicGame";

class TwoCard extends LogicGame {
    process(twice, item, score, stateBoard, setStateBoard) {
        if (twice.length === 1) {
            twice.push(item);
            const [item1] = twice;
            if (item1.key !== item.key) {
                console.log("are different");
                score = score - 5;
                if (score === 0)
                    alert("Game Over");
                setTimeout(() => {
                    const newStateBoard = stateBoard.map((item) => {
                        if (item.done === false) {
                            item.state = false;
                            item.styles = "flex-container div";
                        }
                        return item;
                    });
                    setStateBoard(newStateBoard);
                }, 1000);
            } else {
                this.next.process(twice, item, score, stateBoard, setStateBoard);
            }
        } 
    }
}
export default TwoCard;