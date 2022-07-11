declare global {
    interface String {
        countLetter(letter: string): number;
    }
}

/* Count the given letter appear in current string
* @params: 
    letter: string : the letter need to be counted
* @return: number : the number of the letter appear in current string
*/

String.prototype.countLetter = function (letter: string): number {
    return (this as string).split('').filter(item => item === letter).length;
}

export { }