global.fetch = require('node-fetch')

import { search } from '../src/search'

const cep = search('09181710')

cep.then(data => console.log(data))