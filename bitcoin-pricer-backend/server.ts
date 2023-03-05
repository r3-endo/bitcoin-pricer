import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const PORT = 8070;
const HOST = '0.0.0.0';
const REST_URL = 'http://restapi.ecs.internal:8080';
const REST_API_PATH = '/api/v1/date';

const app = express();

const axiosInstance = axios.create({
    baseURL: REST_URL,
    headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
});

app.get('/api', async (req, res) => {
  try {
    const response = await axiosInstance.get(REST_URL + REST_API_PATH);
    res.send(response.data);
  } catch (error) {
    console.log('ERROR in Backend');
    console.log(error);
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});