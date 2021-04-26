//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  //Code goes here!
  
  let getLength = s.length
  let evenMiddle = (getLength / 2) - 1
  let oddMiddle = getLength/2
  
  if(getLength %2 === 0){
    return (s.charAt(evenMiddle) + s.charAt(evenMiddle + 1))
  }
  else{
    return s.charAt(oddMiddle)
  }
  
}