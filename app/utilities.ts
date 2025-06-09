export function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
        
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
 
export function generateAnswers(answer) {
  let answers = [answer];
  for (let i = 0; i < 3; ++i) {
    answers.push(generateRandomInt(1, 255));
  }
  return shuffleArray(answers);
}

export function secs(duration) {
  return duration * 1000;
}

export function formatAnswer(answer, base) {
  return answer.toString(base);
}

export function toBaseName(base) {
  switch(base) {
    case 2:
      return 'Binary';
      break;
    case 8:
      return 'Octal';
      break;
    case 10:
      return 'Decimal';
      break;
    case 16:
      return 'Hexadecimal';
      break;
  }
}
