import { test, expect } from '@playwright/test';
import { createApiClient } from '../utils/apiClient';
import { getUserId } from '../utils/userStore';

test('PUT: Update User', async () => {
  const api = await createApiClient();
  const userId = getUserId();

  const res = await api.put(`/api/users/${userId}`, {
    data: {
      name: 'Zain Updated',
      job: 'Senior QA',
    },
  });

  expect(res.status()).toBe(200);
  const body = await res.json();
  console.log(userId);
  console.log('🛠️ Updated User:', body);
  expect(body.name).toBe('Zain Updated');
});
