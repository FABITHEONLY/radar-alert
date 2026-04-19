const CACHE = 'radar-alert-v4';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  self.skipWaiting(); // Força a instalação imediata do novo worker
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim(); // Toma o controlo da página imediatamente
});

self.addEventListener('fetch', e => {
  // Estratégia "Network First" (Rede primeiro, Cache como plano B)
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Guarda uma cópia atualizada na cache
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('/index.html')))
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});