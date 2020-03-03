self.addEventListener('push', async (event) => {
  const data = event.data.json();
  console.info(['push:data'], data);

  await self.registration.showNotification(data.title, data.notification);
  
  self.addEventListener('notificationclick', function (event) {
    console.info(['notificationclick'], event);
  });
});


