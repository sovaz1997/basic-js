module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = Math.pow(2, disksNumber);
    
    return {
        turns: turns,
        seconds: 3600 * turns / turnsSpeed
    }
}