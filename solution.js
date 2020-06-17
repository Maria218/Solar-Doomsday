function solution(area) {
    var squarePanelAreas = [];
    
    while (area > 0) {
        var panelSize = Math.trunc(Math.sqrt(area));
        squarePanelAreas.push(panelSize ** 2);
        area -= panelSize ** 2;
    }
    
    console.log(squarePanelAreas);
  }
  
solution(169);