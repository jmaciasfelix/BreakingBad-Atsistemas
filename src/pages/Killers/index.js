import React, { useEffect, useState } from 'react';
//services
import { getDeaths } from 'services/getDeaths';
import { getCharacters } from 'services/getCharacters';

export const KillersPage = () => {
  const [deathCount, setDeathCount] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => {
      const nameCharacter = response.map(({ name }) =>
        name.replaceAll(' ', '+')
      );
      getDeaths(nameCharacter).then((res) => setDeathCount(res));
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
