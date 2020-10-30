//TODO
/*
  JSDOC
  Comparaciones con i18n
  Llamadas a la api
*/
export function getInformationByFilter(payload, filter) {
  if (filter === 'Character' || filter === 'Personaje') {
    console.log('Call API Character');
  } else if (filter === 'Episode' || filter === 'Episodio') {
    console.log('Call API Episode');
  } else if (filter === 'Quote' || filter === 'Citas') {
    console.log('Call API Quote');
  } else if (filter === 'Killer' || filter === 'Asesino') {
    console.log('Call API Killer');
  }
}
