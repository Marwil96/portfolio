"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0fa58866584cebea4212fe7cddf2423a"],["/static/css/main.272c92ac.css","251ad8e30b6f08c695b9c213dffc70f6"],["/static/js/main.534a1b6f.js","d4fa3a6767bbc6bad61117d3631467aa"],["/static/media/AboutPage.4428fc3b.png","4428fc3b7b4f8a48efe721886925a14f"],["/static/media/Arrow.926ebd9f.svg","926ebd9f1be7b0e68be109288f5691e2"],["/static/media/ForWho.d6a757e8.png","d6a757e8e920d7d7d500b8854d408786"],["/static/media/Infographic.5b65b869.png","5b65b869132c58efa0438039abae45ae"],["/static/media/LandingPage.315c10a1.png","315c10a16bb6356cfc873c9108adeb65"],["/static/media/Mission.8fbfb2e1.png","8fbfb2e1806923a12cfdd40360d4a01a"],["/static/media/OurMission.d321c9f4.png","d321c9f47d4c6bbe5a9e633247b2d7c7"],["/static/media/PersonalGoal.d3e753a2.png","d3e753a2c0f6d8382075d7fa1259fc1f"],["/static/media/Problem.8dc984a5.png","8dc984a58bac99c99af433dbca365bd0"],["/static/media/ProjectPage.33c82d63.png","33c82d6353de2c667375573af694ebb9"],["/static/media/ReporterLogin.f58ed799.png","f58ed799825dab4ddf53d1f9419c274d"],["/static/media/ReporterMap.be1c6bbd.png","be1c6bbd9a3ad06963aa219d632cea1c"],["/static/media/ReporterReport.66893def.png","66893def8dbebf45147de0cdbbe9a07b"],["/static/media/ReporterWebbCity.1ba4ca1c.png","1ba4ca1c545c68e3b5c5b660281d1ba6"],["/static/media/Research.2bf6b179.png","2bf6b179e5e9285afb894e73e0c1631d"],["/static/media/Solution.fd68246d.png","fd68246d3fe2a65cd8ae1b4d481cf1f1"],["/static/media/StarvationAllScreens.436783d5.png","436783d50fa7c7386692c2bee81c5c99"],["/static/media/Technlogy.eb7ab18b.png","eb7ab18b6299b3a92de2ed12b0dc2bca"],["/static/media/ThriveBigNumbers.77d5a28a.png","77d5a28a442ff01b9a9d3bb12fc558c9"],["/static/media/ThriveColor.b77cd8c8.png","b77cd8c8dcbeedf14222c6be3a54f981"],["/static/media/ThriveConversion.f7c60101.png","f7c60101db74fd090bd313d7a195d1c6"],["/static/media/ThriveFont.976e496b.png","976e496bb0c04cd660958c8d7f2dd997"],["/static/media/ThriveInfographicMockup.bdbd9cdb.png","bdbd9cdb3110d4a9245ff054628bcc92"],["/static/media/ThriveMobilMockup.111fbf16.png","111fbf169a4f47334b1e95e53eca7f45"],["/static/media/Users.2de900f2.png","2de900f26544750a40feca9970ea59ed"],["/static/media/Why.66754231.png","6675423180a761b24ed40268749a7660"],["/static/media/attitude.0e1a9205.png","0e1a92053ca679d832ef58a8f5a73144"],["/static/media/ball-pulse.667d1947.scss","667d1947ba5ff6bdbaac24831a410a90"],["/static/media/cat.832849b7.png","832849b7395e6e67bbb2b9697d9e9974"],["/static/media/cms.c2ecae04.png","c2ecae04c333d43609f553cbd2c9da30"],["/static/media/color.2fb71fe6.png","2fb71fe64b80cbef9a0e848c883da8bc"],["/static/media/download.ea218b00.svg","ea218b00fb6011e2216deb22c7da91d2"],["/static/media/dynamic.b506ef9d.png","b506ef9de43244c8368d7119a57112b6"],["/static/media/future.bc80ae8b.png","bc80ae8bc0b21dea9c8e6e4c422d1f1a"],["/static/media/identifyProblem.4809e772.png","4809e772165e70f41bcd26491a27dc7a"],["/static/media/menuGif.b954ee3a.gif","b954ee3a2c36b98b52a162d5abed216b"],["/static/media/mobileFirst.4cc4da4f.png","4cc4da4f40ea32b5099e0cedbd5cfca3"],["/static/media/role.a078097a.png","a078097a2fe705cde96cdb0267d0fabd"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/time.b4b68666.png","b4b686662be971a2b05416e7ff585b96"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});