'use strict';
const VERSION='ustaad-offline-v1';
const SHELL=VERSION+'-shell';
const API=VERSION+'-quran-api';
const scope=self.registration.scope;
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(SHELL);
    await cache.addAll([scope,scope+'index.html']);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('ustaad-offline-')&&![SHELL,API].includes(k)).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  const isQuranApi=url.hostname==='api.alquran.cloud'||url.hostname==='alquran.api.islamic.network';
  if(isQuranApi){
    event.respondWith((async()=>{
      const cache=await caches.open(API);
      try{
        const response=await fetch(request);
        if(response.ok)try{await cache.put(request,response.clone())}catch{}
        return response;
      }catch(error){
        const saved=await cache.match(request);
        if(saved)return saved;
        throw error;
      }
    })());
    return;
  }
  if(url.origin===self.location.origin&&(request.mode==='navigate'||url.pathname===new URL(scope).pathname+'index.html')){
    event.respondWith((async()=>{
      try{
        const response=await fetch(request);
        if(response.ok){const cache=await caches.open(SHELL);cache.put(scope+'index.html',response.clone()).catch(()=>{});}
        return response;
      }catch{
        const cache=await caches.open(SHELL);
        return await cache.match(request)||await cache.match(scope+'index.html')||Response.error();
      }
    })());
  }
});
