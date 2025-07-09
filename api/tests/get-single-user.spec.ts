import { test, expect } from '@playwright/test';
import { createApiClient } from '../utils/apiClient';

test('GET: Single User (id: 2)', async () => {
  const api = await createApiClient();
  const res = await api.get('/api/users/2');

  expect(res.status()).toBe(200);
  const body = await res.json();

  console.log('Single User (ID 2):', body);
  expect(body.data).toHaveProperty('id');
  expect(body.data).toHaveProperty('email');
});
