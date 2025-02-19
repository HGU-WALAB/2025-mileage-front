import { HttpResponse } from 'msw';

const ERROR_401_CHANCE = 0.33;
const ERROR_500_CHANCE = 0.33;

const isErrorRandomly = (threshold: number) => {
  const randomNumber = Math.random();
  return randomNumber < threshold;
};

export const randomMswError = () => {
  const is401Error = isErrorRandomly(ERROR_401_CHANCE);
  const is500Error = isErrorRandomly(ERROR_500_CHANCE);

  return { is401Error, is500Error };
};

export const Error401 = () => {
  return new HttpResponse(null, {
    status: 401,
    statusText: 'Authorization Error',
  });
};

export const Error500 = () => {
  return new HttpResponse(null, {
    status: 500,
    statusText: 'Internal Server Error',
  });
};
