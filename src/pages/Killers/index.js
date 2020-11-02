import React, { useEffect, useState } from 'react';
import './Killers.css';
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
//chart
import Chart from 'chart.js';
//components
import { Spinner } from 'components/Spinner';

export const KillersPage = () => {
  const [t] = useTranslation('global');
  const [loading, setLoading] = useState(false);
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

  const createGraf = (array) => {
    var ctx = document.getElementById('myChart').getContext('2d');

    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: array.map(({ name }) => name),
        datasets: [
          {
            label: 'Muertes',
            data: array.map(({ deathCount }) => deathCount),
            backgroundColor: 'white',
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Asesinatos cometidos por personajes',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  useEffect(() => {
    setLoading(true);
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
        createGraf(
          res
            .sort((a, b) => sortDeathCount(a, b))
            .filter(({ deathCount }) => deathCount !== 0)
        );
        setLoading(false);
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
    <div className="min-height py-5">
      {loading ? (
        <>
          <Spinner />
          <canvas id="myChart"></canvas>
        </>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <h3>{t('killersPage.table.name')}</h3>
                </th>
                <th className="btnDrop">
                  <h3>{t('killersPage.table.deathCount')}</h3>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={t('killersPage.table.dropTitle')}
                    as={ButtonGroup}
                  >
                    <ToggleButtonGroup
                      type="radio"
                      className="mb-2"
                      onChange={handleFilter}
                      name="options"
                    >
                      <ToggleButton value={1}>
                        {t('killersPage.table.lowToHigh')}
                      </ToggleButton>
                      <ToggleButton value={2}>
                        {t('killersPage.table.highToLight')}
                      </ToggleButton>
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
          <canvas id="myChart"></canvas>
        </>
      )}
    </div>
  );
};
