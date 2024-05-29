import { AxiosError } from 'axios';

export interface ErrorResponseFormat {
  message: string;
  description: string;
}

type GetAxiosError = (axiosError: AxiosError<ErrorResponseFormat>) => {
  title: string;
  description?: string;
};

export const getAxiosError: GetAxiosError = (error) => ({
  title: error?.response?.data?.message,
  description: error?.response?.data?.description,
});
