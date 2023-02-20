# Backend project

## How to install

Open the terminal in the project directory, then run the command `npm i`.

## Available scripts

In the project directory, you can run:

### `npm run dev:server src/index.ts`

Runs the backend in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Runs the [tsc cli](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to compile the code.

## Routes

### `/users`

Show all users.

**method:** GET

**request:**
```
curl --request GET -i "http://localhost:3333/users"
```

**response:**
```
[
  {
    name: string,
    email: string
  },
]
```

**status:** 200

### `/users/create`

Send a fake email.

**method:** POST

**request:**
```
curl --request POST -i "http://localhost:3333/users/create"
```

**response:**
```
null
```

**status:** 200
