const POST = async (request) => {
  const requestBody = await request.json();
  const userInput = requestBody.input;
  const responseData = {
    userInput: userInput,
  }
  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export { POST }
