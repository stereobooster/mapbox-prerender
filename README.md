# Demo of an error

https://github.com/alex3165/react-mapbox-gl/issues/417

```
yarn
yarn build
...
/: [object Object]
/: [object Object]
/: Error: TypeError: Cannot read property 'resize' of undefined
    at resize (../node_modules/mapbox-gl/dist/mapbox-gl.js:398:5239)
    at resize (../node_modules/mapbox-gl/dist/mapbox-gl.js:398:2910)
    at s.componentDidMount (../node_modules/react-mapbox-gl/lib/map.js:139:0)
    at componentDidMount (../node_modules/react-dom/cjs/react-dom.production.min.js:169:71)
    at Nh (../node_modules/react-dom/cjs/react-dom.production.min.js:180:195)
    at c (../node_modules/react-dom/cjs/react-dom.production.min.js:183:347)
    at k (../node_modules/react-dom/cjs/react-dom.production.min.js:184:366)
    at p (../node_modules/react-dom/cjs/react-dom.production.min.js:188:389)
    at y (../node_modules/react-dom/cjs/react-dom.production.min.js:187:415)
    at c (../node_modules/react-dom/cjs/react-dom.production.min.js:248:42)
...
Crawled 1 out of 1 (/)
✨  Done in 23.45s.
```
