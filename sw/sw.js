let id = 0;

const map = new Map();

self.addEventListener('fetch', (event) => {
  let request = event.request;
  console.log(event);
  /*self.postMessage({
    id: id++,
    event
  });*/
  event.respondWith(new Promise((resolve, reject) => {
    resolve(new Response(request.url, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
    return;
    /*map.set(id, {
      resolve,
      reject
    });*/
  }));
});

self.addEventListener('message', (event) => {
  console.log(event);
});
