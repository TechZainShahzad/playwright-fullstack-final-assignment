import { request } from '@playwright/test';

export async function createApiClient() {
  return await request.newContext({
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'x-api-key': 'reqres-free-v1'
    }
  });
}
