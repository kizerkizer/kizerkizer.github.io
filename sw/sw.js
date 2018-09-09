self.addEventListener('fetch', (event) => {
  console.log(event);
  return false;
});
