function getAdvice(lastElement) {
  if(lastElement === 'random') return `https://api.chucknorris.io/jokes/random`;
  
  return `https://api.chucknorris.io/jokes/random?category=${lastElement}`;
}

export default getAdvice;
