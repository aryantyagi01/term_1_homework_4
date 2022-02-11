function largestOfThree(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}

console.log(largestOfThree(5, 789, 234));
console.log(largestOfThree(0,-10,-20));
console.log(largestOfThree(1000,510,440));