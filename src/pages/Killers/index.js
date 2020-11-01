import React, { useEffect, useState } from 'react';
//services
import { getDeaths } from 'services/getDeaths';
import { getCharacters } from 'services/getCharacters';

const sortDeathCount = (a, b) => {
  if (a.deathCount > b.deathCount) {
    return -1;
  }
  if (a.deathCount < b.deathCount) {
    return 1;
  }
  return 0;
};

export const KillersPage = () => {
  const [deathCount, setDeathCount] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      const nameCharacter = response.map(({ name }) =>
        name.replaceAll(' ', '+')
      );
      getDeaths(nameCharacter).then((res) => {
        setDeathCount(
          res
            .sort((a, b) => sortDeathCount(a, b))
            .filter(({ deathCount }) => deathCount !== 0)
        );
      });
    });
  }, []);

  return (
    <>
      <section className="my-5">
        <h1>Asesinos</h1>
      </section>
    </>
  );
};

// useEffect(() => {
//     getCharacters().then((response) => {
//       const nameCharacter = response.map(({ name }) =>
//         name.replaceAll(' ', '+')
//       );
//       nameCharacter.map((author) =>
//         getDeaths(author).then((response) => console.log(response[0]))
//       );
//     });
//   }, []);
