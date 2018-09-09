let id = 0;

const map = new Map();

self.addEventListener('fetch', (event) => {
  let request = event.request;
  console.log(event);
  event.respondWith(new Promise(resolve, reject) => {
    resolve(new Response(request.url, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  });
});

self.addEventListener('message', (event) => {
  console.log(event);
});
