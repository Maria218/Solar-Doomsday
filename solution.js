const reducer = (accumulator, currentValue) => accumulator + currentValue;

function solution(area) {
    var squares = []
  
    var totalArea = area
    
    var square = 1

    while (squares.reduce(reducer, 0) < area) {
        
        if ((square + 1) ** 2 >= totalArea) {
            squares.push(square ** 2)
            
            totalArea -= square ** 2
            
            square = 1
        }

        else {
            square += 1
        }
    }
    
    console.log(squares);
}

solution(15324);
