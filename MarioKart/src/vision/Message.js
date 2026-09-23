export default class Message {
    out(msg) {
        console.log(msg);
    }
    start(str1, str2) {
        console.log(`🚨 Corrida entre ${str1} e ${str2} começando...\n`);
    }
    round(str1) {
        console.log(`🏁 Rodada: ${str1}`);
    }
    track(str1) {
        console.log(`🚦 Pista: ${str1}`);
    }
    win(str1) {
        console.log(`✌️ ${str1} venceu a rodada!`);
    }
    victory(str1) {
        console.log(`\n🏆 ${str1} venceu a corrida!`);
    }
    draw() {
        console.log(`🤝 Empate na rodada!`);
    }
    tie(str1, str2) {
        console.log(`\n🤗 ${str1} e ${str2} empataram a corrida!\n`);
    }
}