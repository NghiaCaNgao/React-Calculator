declare global {
    interface String {
        countLetter(letter: string): number;
    }
}

String.prototype.countLetter = function (letter: string): number {
    return (this as string).split('').filter(item => item === letter).length;
}

export { }