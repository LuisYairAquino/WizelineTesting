# testcafe-reporter-wizelinechallenge
[![Build Status](https://travis-ci.org/LuisAquino/testcafe-reporter-wizelinechallenge.svg)](https://travis-ci.org/LuisAquino/testcafe-reporter-wizelinechallenge)

This is the **wizelinechallenge** reporter plugin for [TestCafe](http://devexpress.github.io/testcafe).

<p align="center">
    <img src="https://raw.github.com/LuisAquino/testcafe-reporter-wizelinechallenge/master/media/preview.png" alt="preview" />
</p>

## Install

```
npm install testcafe-reporter-wizelinechallenge
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter wizelinechallenge
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('wizelinechallenge') // <-
    .run();
```

## Author
 (https://github.com/LuisYairAquino)
