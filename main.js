if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/Antiquities_in_Jordan/service-worker.js')
             .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}


