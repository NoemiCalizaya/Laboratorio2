import LogicGame from "./LogicGame";

class TwoCard extends LogicGame {
    process(twice, item, stateScore, setStateScore, stateBoard, setStateBoard) {
        if (twice.length === 1) {
            twice.push(item);
            const [item1] = twice;
            if (item1.key !== item.key) {
                console.log("are different");
                stateScore -= 5;
                console.log(stateScore);
                setStateScore(stateScore);
                setTimeout(() => {
                    const newStateBoard = stateBoard.map((item) => {
                        if (item.done === false) {
                            if (stateScore === 0)
                                alert("Game Over");
                            item.state = false;
                            item.styles = "flex-container div";
                        }
                        return item;
                    });
                    setStateBoard(newStateBoard);
                }, 1000);
            } else {
                this.next.process(twice, item, stateScore, setStateScore, stateBoard, setStateBoard);
            }
        } 
    }
}
export default TwoCard;