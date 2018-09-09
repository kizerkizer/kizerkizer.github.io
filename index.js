if (navigator && `serviceWorker` in navigator) {
  window.onload = () => {
    navigator.serviceWorker.register(`sw.js`)
    .then((registration) => {
      console.log(registration);
    });
  };
}
