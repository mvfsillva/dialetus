self.addEventListener('install', (event) => {
  const indexPage = new Request('index.html')
  event.waitUntil(
    fetch(indexPage).then((response) => {
      return caches.open('pwa-offline').then((cache) => {
        console.log(`Cached index page during Install ${response.url}`)
        return cache.put(indexPage, response)
      })
  }))
})

self.addEventListener('fetch', (event) => {
  const updateCache = (request) => {
    return caches.open('pwa-offline').then((cache) => {
      return fetch(request).then((response) => {
        console.log(`add page to offline ${response.url}`)
        return cache.put(request, response)
      })
    })
  }

  event.waitUntil(updateCache(event.request))

  event.respondWith(fetch(event.request).catch((error) => {
    console.error(`Network request Failed. Serving content from cache: ${error}`)
    return caches.open('pwa-offline').then( (cache) => {
      return cache.match(event.request).then( (matching) => {
        return !matching || matching.status == 404?Promise.reject('no-match'): matching
      })
    })
  }))
})
