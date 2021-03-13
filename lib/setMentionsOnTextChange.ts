import React, { SetStateAction } from "react";
import { DispatchTextState, MentionEntity } from "../types";
import sanitizeMentions from "./sanitizeMentions";

export default function setMentionsOnTextChange(
  setText: DispatchTextState,
  mentions: MentionEntity[],
  setMentions: React.Dispatch<SetStateAction<MentionEntity[]>>,
) {
  return (text: string) => {
    setText(text);
    const mentionsEntity = sanitizeMentions(mentions, text);
  
    if (mentionsEntity.isChanged) {
      setMentions(mentionsEntity.updatedState);
    }
  }
}
