import axios from 'axios';

interface Pet {
  id: number;
  name: string;
  status: string;
  [key: string]: any; // Для дополнительных полей
}

async function fetchPets() {
  try {
    const response = await axios.get<Pet[]>(
      'https://petstore3.swagger.io/api/v3/pet/findByStatus',
      {
        params: { status: 'available' },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
}

fetchPets();
