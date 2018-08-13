const BASE_URL =
  'https://quest-scripts.firebaseio.com/quests/solvers_community';

export const postData = (endpoint: string, data = {}) => {
  // Default options are marked with *
  return fetch(BASE_URL + endpoint, {
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    redirect: 'follow', // manual, *follow, error
  })
    .then(response => response.json()) // parses response to JSON
    .catch(error => {
      alert(
        'There was an error uploading your quester. Are you connected to the internet?',
      );
      /*tslint:disable-next-line*/
      console.error(error);
    });
};
