//install the service worker
self.addEventListener('install', event => {
    console.log('service worker had been installed')
})


//activate service worker
self.addEventListener('activate', event => {
    console.log('service worker has been activated')
})

//fetch events
self.addEventListener('fetch', event => {
    // console.log('fetch event', event)
})