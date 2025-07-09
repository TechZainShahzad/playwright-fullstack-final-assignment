let userId: string = '';

export function setUserId(id: string) {
  userId = id;
  console.log('Saved userId:', userId);
}

export function getUserId(): string {
  console.log('Fetched userId:', userId);
  return userId;
}
