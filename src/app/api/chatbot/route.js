const GET = async (request) => {
    return new Response('Hello, Next.js!', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  export { GET }
  