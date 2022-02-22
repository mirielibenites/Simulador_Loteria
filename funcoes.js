var numSort = []

function sorteioNum(){
    numSort = []
    do {
        let sort = Math.ceil(Math.random()*60)
        if(!numSort.includes(sort))
        numSort.push(sort)
    } while (numSort.length<6);
    
    console.log(numSort)

}