interface Person {
  firstname: string;
  lastname: string;
  intials: string;
  title: string;
}

export interface PersonItems extends Array<Person> {}

const LOCAL_URL = 'http://localhost:8080/';

export const getProccessedHouseingData = (): Promise<PersonItems> => {
  return fetch(LOCAL_URL)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return [];
    }); 
};
