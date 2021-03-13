import { MentionEntity } from "../types";

export interface SanitizedMentionsResponse { 
  isChanged: boolean;
  updatedState: MentionEntity[];
}

export default function sanitizeMentions(mentions: MentionEntity[], postBody: string) {
  let state: SanitizedMentionsResponse = {isChanged: false, updatedState: []};

  for (let i = 0; i < mentions.length; i++) {
    const start = mentions[i].startindex;
    const end = mentions[i].endindex + 1;
    if (postBody.slice(start, end) !== mentions[i].text) {
      state.isChanged = true;
      const newStartIndex = postBody.indexOf(mentions[i].text);
      if (newStartIndex !== -1) {
        const newEndIndex = newStartIndex + mentions[i].text.length - 1;
        state.updatedState.push({
          ...mentions[i],
          startindex: newStartIndex,
          endindex: newEndIndex,
        });
      }
    } else {
      state.updatedState.push(mentions[i]);
    }
  }

  return state;
}
