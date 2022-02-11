    
     var x= parseInt(prompt('Enter x: ')); 
     var y= parseInt(prompt('Enter y: ')); 
     var z= parseInt(prompt('Enter z: ')); 
    function check(x,y,z) {
    if (x + y < z || x + z < y || y + z <= x)
    return Impossible_triangle;
    else {
     var semiperimeter = (x + y + z)/2;
     var area =  Math.sqrt(semiperimeter*((semiperimeter-x)(semiperimeter-y)(semiperimeter-z)));
     console.log(area);
     var perimeter = (x + y + z);
     console.log(perimeter);
    }
}