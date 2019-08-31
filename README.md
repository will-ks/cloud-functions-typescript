🔖 Starter kit for Google Cloud Functions using TypeScript, with:

* Functions Framework local hosting
* Nodemon reloading
* TypeScript ESLint
* Prettier

##### Requirements

* [gcloud](https://cloud.google.com/functions/docs/quickstart)
* Node
* yarn or npm

##### Setup

Edit config in `package.json`
```
  "config": {
    "project": "projectName", // Your Google Cloud project
    "function": "helloWorld" // Name of function
  },
```

##### Usage

For a live reloading local dev server, run

```
yarn start
```

To deploy, run

```
yarn deploy
```
