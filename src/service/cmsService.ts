const BASE_ENDPOINT = 'https://graphql.datocms.com/';
const TOKEN = process.env.DATO_TOKEN;

export async function cmsService({ query }: {query: string}) {
  try {
    const pageContentResponse = await fetch(BASE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query })
    });

    const body = await pageContentResponse.json();

    if (body.errors) throw new Error(JSON.stringify(body));

    return { data: { ...body.data } };
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    
    throw error;
  }
}