// check if the number is big
const numberLarger = function (number) {
    if (number > 100) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(numberLarger(131));
  console.log(numberLarger(12));
  console.log(numberLarger(0));
  console.log(numberLarger(210));
  
  // Bouncer at club

  const getBouncerReaction = function (
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
  ) {
    if (ageOfPotentialVisitor < 18) {
      return "this is a club for adults";
    }
    if (currentVisitors >= maxVisitors) {
      return "it's too busy now, come back later";
    } else {
      return "come in";
    }
  };
  
  console.log(getBouncerReaction(2000, 0, 15)); //"this is a club for adults"
  console.log(getBouncerReaction(2000, 1999, 50)); //"come in"
  console.log(getBouncerReaction(2000, 2000, 40)); //"it's too busy now, come back later"
  
  // Calculating the average
  
  const average = function (number1, number2, number3, number4, number5) {
    const average = (number1 + number2 + number3 + number4 + number5) / 5;
    return average;
  };
  
  const result = average(1, 2, 3, 4, 5);
  console.log(result);