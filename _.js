let id = 0;

const map = new Map();

self.addEventListener('fetch', (event) => {
  console.log(event);
  event.respondWith(new Promise((resolve, reject) => {
    resolve(new Response(event.request.url, {
      headers: {
        'Content-Type': 'text/plain'
      }
    }))
  }));
});

self.addEventListener('message', (event) => {
  console.log(event);
});
