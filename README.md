### Dependencies
```
@angular/cli
node 10+
```

### To build lib and application #1 method

open a new terminal tab and run:

```
cd my-workspace
npm install
ng build
cd dist
cd lib-style-guide
npm i
npm link

cd ../../testing-style-guide-lib
npm i
npm link lib-style-guide
ng serve
```
