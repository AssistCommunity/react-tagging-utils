export default function updateTextWithMentionTag(text: string, tag: string) {
  let wordsArray = text.split(' ');
  let splitUsername = tag.split(' ');
  if (wordsArray.length === 1 || splitUsername.length === 1) {
    wordsArray[wordsArray.length - 1] = tag;
  } else {
    if (wordsArray[wordsArray.length - 2] === splitUsername[0]) {
      wordsArray[wordsArray.length - 1] = splitUsername[1];
    } else {
      wordsArray[wordsArray.length - 1] = tag;
    }
  }
  let reducedText = wordsArray.join(' ') + ' ';
  return reducedText;
}
