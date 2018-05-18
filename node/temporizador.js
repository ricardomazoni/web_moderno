const schedule = require('node-schedule')
/**
 * * /5  -> Vai querer executar em 5 e 5 segundos
 *  * -> qualquer minuto
 *  12 -> horas
 *  * -> ignora o dia do mês
 *  * -> ignora o mês
 *  2 -> vai excutar na terca 0-Domingo ...
 */

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 1', function(){
    console.log('Executando Tarefa 1 !', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1')
},7000) // Cancela depois de 7 segundos

/**
 * regra de recorrencia 
 * define os dias de semana que fique executando 
 * 
 */
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // todos os dia da semana
regra.hour = 10
regra.second = 15

/**
 * toda 10 horas no segundo 01:15 será executado
 */
const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})