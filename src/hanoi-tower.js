module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = 2 ** disksNumber - 1;
    
    return {
        turns: turns,
        seconds: turns / (turnsSpeed / 3600)
    }
}