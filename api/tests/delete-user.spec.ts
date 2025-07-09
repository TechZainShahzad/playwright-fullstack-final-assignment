import { test, expect } from '@playwright/test';
import { createApiClient } from '../utils/apiClient';
import { getUserId } from '../utils/userStore';

test('DELETE: User', async () => {
  const api = await createApiClient();
  const userId = getUserId();

  const res = await api.delete(`/api/users/${userId}`);
  console.log(`Deleted User ID: ${userId}, Status: ${res.status()}`);

  expect(res.status()).toBe(204);
});
