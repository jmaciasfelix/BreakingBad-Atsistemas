import axios from 'axios';

const ENDPOINT = 'https://breakingbadapi.com/api/death-count?name=';

export async function getDeaths(author) {
  return Promise.all(
    author.map((name) =>
      axios.get(`${ENDPOINT}${name}`).then((response) => response.data[0])
    )
  );
}
