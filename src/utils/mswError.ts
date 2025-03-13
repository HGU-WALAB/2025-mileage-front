import { getErrorMessage } from '@/utils/getErrorMessage';
import { HttpResponse } from 'msw';

const ERROR_400_CHANCE = 0.1;
const ERROR_401_CHANCE = 0.1;
const ERROR_500_CHANCE = 0.1;
const RANDOM_CHANCE = 0.5;

const isErrorRandomly = (threshold: number) => {
  const randomNumber = Math.random();
  return randomNumber < threshold;
};

export const randomMswError = () => {
  const is400Error = isErrorRandomly(ERROR_400_CHANCE);
  const is401Error = isErrorRandomly(ERROR_401_CHANCE);
  const is500Error = isErrorRandomly(ERROR_500_CHANCE);
  const isRandom = isErrorRandomly(RANDOM_CHANCE);

  return { is400Error, is401Error, is500Error, isRandom };
};

export const Error400 = (message: string = getErrorMessage('400')) => {
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

export const Error401 = (message: string = getErrorMessage('401')) => {
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

export const Error500 = (message: string = getErrorMessage('500')) => {
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
