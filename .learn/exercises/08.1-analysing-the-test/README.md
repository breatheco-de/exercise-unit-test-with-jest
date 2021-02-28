# `08.1` Analysing the test

What just happened? Basically when you run the command `npm run test` the computer will use the `jest` library
to scan your files for any files containing the word `test`, in our case we had one file called `test.js`.

After jest discovers your test files it will start executing the test() functions inside those files.

### About the ouput:

Every time you run the command `npm run test` you will get a report back on the command line specifiying how many 
files containing the word "test" were found and what how many of them were successfully executed.

![Jest Report](../../assets/08.1jest-report.png)