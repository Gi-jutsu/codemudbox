export const execute = (payload: string) => fetch(
  `${import.meta.env.VITE_API_URL}/code/execute`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ payload }),
  },
);
