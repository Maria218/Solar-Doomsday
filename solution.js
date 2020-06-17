function solution(area) {
    var squarePanelAreas = [];
    
    // Use a while loop to continue this function until the entire area you have been given has been filled by the square panels
    while (area > 0) {
        // Find the square root of the area you are given. If the square root is a decimal number, truncate it so that it converts to a whole number without rounding up or down. Nothing will happen if the number is a whole number
        var panelSize = Math.trunc(Math.sqrt(area));

        // Finding the square root of that number gives us the size of the square panel. To find the area of the square panel, square the size of the panel and push it into your array of total areas
        squarePanelAreas.push(panelSize ** 2);

        // Subtract the area of the square panel from the total area you were initially given. This shows how many square yards we have left to fill with square panels. Because this is in a while loop, the same code will run until we have filled the remaining square yards
        area -= panelSize ** 2;
    }
    
    console.log(squarePanelAreas);
  }
  
solution(169);