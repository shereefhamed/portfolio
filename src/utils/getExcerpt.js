export default (phrase, wordNumber) => {
    return phrase.split(/\s+/).slice(0, wordNumber).join(" ");
}