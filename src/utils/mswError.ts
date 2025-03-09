import { HttpResponse } from 'msw';

const ERROR_400_CHANCE = 0.1;
const ERROR_401_CHANCE = 1;
const ERROR_500_CHANCE = 0.1;

const isErrorRandomly = (threshold: number) => {
  const randomNumber = Math.random();
  return randomNumber < threshold;
};

export const randomMswError = () => {
  const is400Error = isErrorRandomly(ERROR_400_CHANCE);
  const is401Error = isErrorRandomly(ERROR_401_CHANCE);
  const is500Error = isErrorRandomly(ERROR_500_CHANCE);

  return { is400Error, is401Error, is500Error };
};

export const Error400 = (message: string = '400 ERROR') => {
  return HttpResponse.json(
    {
      message,
    },
    {
      status: 400,
      statusText: 'Bad Request Error',
    },
  );
};

export const Error401 = (message: string = '401 ERROR') => {
  return HttpResponse.json(
    {
      message,
    },
    {
      status: 401,
      statusText: 'Authorization Error',
    },
  );
};

export const Error500 = (message: string = '500 ERROR') => {
  return HttpResponse.json(
    {
      message,
    },
    {
      status: 500,
      statusText: 'Internal Server Error',
    },
  );
};
