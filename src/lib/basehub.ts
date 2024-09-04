import { basehub } from 'basehub';

const client = basehub({ cache: 'no-store' });

export async function fetchWorks() {
  try {
    const { works } = await client.query({
      works: { items: { _slug: true, title: true } },
    });
    return works.items;
  } catch (error) {
    console.error('Error fetching data from Basehub:', error);
    return [];
  }
}