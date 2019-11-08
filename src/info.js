
const DIARY = Diary.DIARIO

function getItems(){
  let arrayTemp = []

    DIARY.forEach(items => {
        items.eventos.forEach(event =>{
            if (!arrayTemp.includes(event)){
                arrayTemp.push(event)
            } 
        })
    });

    return arrayTemp
}

function getItemsTrue() {
    let arrayTempTrue = []
    let count = 0
    DIARY.forEach(items => {
        if (items.pulpo){
            count ++
        }
        items.eventos.forEach(event =>{
            if (items.pulpo){
                arrayTempTrue.push(event)
            } 
        })
    });

    arrayTempTrue.push(count)
    return arrayTempTrue
}

function matrixForItem(element) {

    let matrix =  []
    let numbersFalse = []
    let numbersTrue = []
    countElementTrue = 0
    countElementFalse = 0
    countFalse = 0
    countTrue = 0

    DIARY.forEach((items) => {
        if (items.eventos.includes(element)){
            if (items.pulpo){
                countElementTrue ++
            }else {
                countElementFalse ++
            }}
        else {
                if (items.pulpo){
                    countTrue ++
                }else{
                    countFalse ++
                }
            }
        })

    numbersFalse.push(countFalse, countElementFalse)
    numbersTrue.push(countTrue, countElementTrue)
    matrix.push(numbersFalse, numbersTrue)

    return matrix
}



function getMapItemMatrixPhi(){
    let iteMap = new Object
    getItems().forEach(item =>{
        let phi = new Phi
        let arrayItem = matrixForItem(item)
        let calculatedPhi = phi.phi(arrayItem)
        iteMap = {
            item : item,
            matrix : arrayItem,
            phi : calculatedPhi
        }
        console.log('iteMap :', iteMap);
    })

    console.log('iteMap :', iteMap);
}

getMapItemMatrixPhi()