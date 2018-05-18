/**
 * carregando o lodash a partir do 
 * node_modules
 */

 const _ = require('lodash')
 setInterval(
     ()=> console.log(_.random(1,10)),2000
)