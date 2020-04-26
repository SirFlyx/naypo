exports.run = async (client, message) => {
    message.channel.send('**BISSSSHH Estou fumando**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 3500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 4500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 5500);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 6500);
        setTimeout(() => {
            msg.edit(`Ae ${message.author} quer um pouco?`);
        }, 7500);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 8500);
        setTimeout(() => {
            msg.edit(`Terminei de fumar!`);
        }, 9500);
    });
}