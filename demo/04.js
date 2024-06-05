const crypto = require('crypto');
const name = 'aic';
const hash = crypto.createHash('md5').update(name).digest('hex');
