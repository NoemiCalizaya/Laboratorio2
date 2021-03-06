export const createBoard = (card) => {
    if (card % 2 !== 0) {
        throw new Error("Es necesario un nuevo par de elementos");
    }
    let listBoard = [];
    let count = 0;
    for (let i=0; i<card/2; i++){
        let symbols = String.fromCharCode(65 + count);
        let item1 = { 
            backend: "??", 
            frontend: symbols, 
            //si esta de frente o detras la tarjeta
            state: false, 
            //tarjetas que ya han sido adivinadas
            done: false, 
            //darle algun tipo de llave a las tarjetas para poder compararlas
            key: `card_${i}`,
            styles: "flex-container div",
        };
        let item2 = { ...item1};
        listBoard = [ ...listBoard, item1, item2];   
        count++;
    }
    for (let i = 0; i < listBoard.length; i++) {
        let index = Math.ceil(Math.random() * listBoard.length -1);
        let item = listBoard[index];
        listBoard[index] = listBoard[i];
        listBoard[i] = item;
    }
    
    listBoard = listBoard.map((item, index) =>{
        item = {id: index, ...item};
        return item;
    });
    return listBoard;
};