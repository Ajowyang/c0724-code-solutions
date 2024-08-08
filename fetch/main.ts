interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchData(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json()) as Pokemon;
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();
