import React, { useEffect, useState } from 'react';
//services
import { getDeaths } from 'services/getDeaths';
import { getCharacters } from 'services/getCharacters';
//bootstrap
import {
  Table,
  DropdownButton,
  ToggleButtonGroup,
  ToggleButton,
  ButtonGroup,
} from 'react-bootstrap';
//i18n
import { useTranslation } from 'react-i18next';

export const KillersPage = () => {
  const [t] = useTranslation('global');
  const [deathCount, setDeathCount] = useState([]);

  const sortDeathCount = (a, b) => {
    if (a.deathCount > b.deathCount) {
      return -1;
    }
    if (a.deathCount < b.deathCount) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    console.log('renderizo');
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

  const handleFilter = (filter) => {
    if (filter === 1) {
      setDeathCount([...deathCount].sort((a, b) => sortDeathCount(b, a)));
    } else if (filter === 2) {
      setDeathCount([...deathCount].sort((a, b) => sortDeathCount(a, b)));
    }
  };

  return (
    <>
      <section className="my-5">
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{t('killersPage.table.name')}</th>
                <th>
                  {t('killersPage.table.deathCount')}
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Ordenar"
                    as={ButtonGroup}
                  >
                    <ToggleButtonGroup
                      type="radio"
                      className="mb-2"
                      onChange={handleFilter}
                      name="options"
                    >
                      <ToggleButton value={1}>Menor a mayor</ToggleButton>
                      <ToggleButton value={2}>Mayor a menor</ToggleButton>
                    </ToggleButtonGroup>
                  </DropdownButton>
                </th>
              </tr>
            </thead>
            <tbody>
              {deathCount.map(({ deathCount, name }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{deathCount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
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
