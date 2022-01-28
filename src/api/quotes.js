import axios from 'axios';

//fetch random quote
const randomQuote = async () => {
  let res = await axios.get('https://api.quotable.io/random?tags=technology|business|inspirational');
  return res.data;
}

export { randomQuote };