var express = require('express');
const proxy = require('../src/lib/proxy');
var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
  try {
    const { data } = await proxy.post('/front/article/findFrontHomeMapList', req.body, { timeout: 60000 } );
    res.send(JSON.stringify(Object.entries(data).reduce((prev, [key, value], index) => ({
      ...prev,
      [key]: value.map(i => { if(!index) i.content = null; return i; }),
    }), {})));
  } catch(e) {
    res.send(e.message);
  }
});

module.exports = router;
