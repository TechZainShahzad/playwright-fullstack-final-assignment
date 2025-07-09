import { test, expect } from '@playwright/test';
import { createApiClient } from '../utils/apiClient';
import { setUserId } from '../utils/userStore';

test('POST: Create User', async () => {
  const api = await createApiClient();
  const res = await api.post('/api/users', {
    data: {
      name: 'Zain',
      job: 'QA Engineer',
    },
  });

  expect(res.status()).toBe(201);
  const body = await res.json();

  console.log('Created User:', body);
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('createdAt');

  setUserId(body.id); // Save ID for future tests
});
