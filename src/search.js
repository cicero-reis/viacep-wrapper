import { API_URL } from './config'
import { toJSON } from './utils'

const JSON = 'json'

export const search = (cep) => 
    fetch(`${API_URL}/${cep}/${JSON}`).then(toJSON)