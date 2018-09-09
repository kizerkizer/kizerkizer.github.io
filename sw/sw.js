let id = 0;

const map = new Map();

self.addEventListener('fetch', (event) => {
  console.log(event);
  self.postMessage({
    id: id++,
    event
  });
  event.respondWith(new Promise((resolve, reject) => {
    resolve('foo');
    return;
    map.set(id, {
      resolve,
      reject
    });
  }));
});

self.addEventListener('message', (event) => {
  console.log(event);
});
