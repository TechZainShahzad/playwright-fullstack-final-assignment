import { test, expect } from '@playwright/test';
import { createApiClient } from '../utils/apiClient';

test('GET: Users List (page 2)', async () => {
  const api = await createApiClient();
  const res = await api.get('/api/users?page=2');

  expect(res.status()).toBe(200);
  const body = await res.json();

  console.log('All Users (Page 2):', body);
  expect(Array.isArray(body.data)).toBe(true);
});
