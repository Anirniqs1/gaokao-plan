const K="gk27-v1",F=["./","index.html","manifest.json","icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(K).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
