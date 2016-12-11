# Getting Started

Angular 2 app that will help (hopefully) me learn swedish faster. 

## Get the Code
```
git clone https://github.com/MargaretKrutikova/learn-swedish-app.git learn-swedish-app
cd learn-swedish-app
npm i
```

### Just in Time (JiT) Compilation

Runs the TypeScript compiler and launches the app

```
npm start
```

### Running css injector

Creates a new instance of the app in a separate tab and allows modifying sass with instant 
injecting of the modifications without full page reload. Speeds up development of the styling part
of the app.

```
npm serve-css
``` 

### Ahead of Time (AoT) Compilation 

Runs the Angular AoT compiler, rollup, uglify for an optimized bundle, then launches the app

```
npm run start-aot
```

### AoT + gzip 

Runs AoT plus gzips and launches the app 

```
gulp copy-aot-gzip
npm run aot
npm run rollup
http-server
```

Notes:
- Use your favorite server in place of `http-server`
- This could be scripted, obviously
- `lite-server` does not launch gzipped files by default.

