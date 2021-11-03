export const getFromAPI = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (resp.ok) {
    const body = await resp.json();
    return body;
  }
  return { error: true };
};

const mockAPI = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: [
          {
            name: 'Juan Ospina',
            email: 'juan@mail.com',
          },
          {
            name: 'Jose Ospina',
            email: 'jose@mail.com',
          },
          {
            name: 'JJ Ospina',
            email: 'jj@mail.com',
          },
          {
            name: 'John Ospina',
            email: 'john@mail.com',
          },
          {
            name: 'Joseph Ospina',
            email: 'joseph@mail.com',
          },
        ],
      });
    }, Math.random() * (2000 - 10) + 10);
  });

export const mockLocalAPI = async () => {
  const resp = await mockAPI();
  if (resp.ok) {
    const body = resp.data;
    return body;
  }
  return { error: true };
};
