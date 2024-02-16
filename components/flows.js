const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');


const REGEX_ALL_TEXT = /./;
const flowAnswer = addKeyword([REGEX_ALL_TEXT], { regex: true })
.addAnswer('🤖 Dame un momento, estoy buscando la respuesta a tu pregunta')
.addAction(async(ctx) => {
    console.log(`-----> flowAnswer <-----`)
    console.log(`contacto: ${ctx.from}`)
    console.log(`Mensaje: ${ctx.body}`)
});

const flowVoice = addKeyword(EVENTS.VOICE_NOTE)
.addAnswer('🤖 Dame un momento, estoy escuchando tu audio');

const flowPrincipal = addKeyword(['hola', 'buenas', 'hello'])
.addAnswer('🙌 Hola bienvenido soy VotaBot',)
.addAnswer(
    [
        'soy un chatbot potenciado por inteliegencia artificial que de forma amable y jocosa responde a los dominicanos, sus dudas sobre el historial politico de sus candidatos a la presidencia en las elecciones de mayo del 2024',
        'puedes preguntarme cosas como:',
        '🤔 ¿Quién es Luis Abinader?',
        '🤔 ¿Cuales son los candidatos a presidencia?',
        '🤔 ¿Quién es el candidato del PRM?',
        '🤔 ¿Quién es el candidato del PLD?',
    ],
    { capture: true },
    (ctx) => {
        console.log('-----> flowPrincipal - V2 <-----');
        console.log(`contacto:${ctx.from}`);
        console.log(`Mensaje: ${ctx.body}`);
    },
    [flowAnswer]
);

module.exports = { flowPrincipal, flowVoice};