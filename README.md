# Random Faker

Fakes crypto.randomBytes in NodeJS.

## Usage

```js
var faker = require('node_random_faker');


faker.fake(42);
console.log(crypto.randomBytes(4));
faker.restore();
```

Result will be `<Buffer 2a 2a 2a 2a>`
