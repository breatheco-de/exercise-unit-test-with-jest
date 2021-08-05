# Unit testing with Jest

```
Important: 💻  This exercise is interactive!
Please follow the instructions.
```

Most developers today are required not only to write code, but they also need to write code to test their own code 😱, yes.. really.

Today we are going to be using the [jest framework](https://jestjs.io/) to create our first tests.

## 🌱  How to start this project

This project comes with the necessary files to start working, but you have two options to start:

a) Use gitpod: open this link in your browser to clone it with gitpod: https://gitpod.io#https://github.com/breatheco-de/exercise-unit-test-with-jest.git

b) You can clone this repository on your local computer:
```sh
$ git clone https://github.com/breatheco-de/exercise-unit-test-with-jest.git

💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.
```
Then follow this instructions:

1. Get into the exercise folder: `$ cd exercise-unit-test-with-jest`
2. Download learnpack globally (if you don't have it already): `$ npm i learnpack -g`
3. Start the exercise: `$ learnpack start`

## What is this exercise about?

We are going to be using the Jest library to build a program capable of converting numeric values from one currency to another:

| Function name     | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| fromDollarToYen   | Receives a dollar amount and returns equivalent amount in Japan Yen  |
| fromEuroToDollar  | Receives a Euro amount and returns equivalent amount in US Dollar     |
| fromYenToPound    | Reveives a Yen amount and equivalent amount in England Pound          |

