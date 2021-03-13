import { MutableRefObject } from "react";
import { TextInput } from "react-native";
import { DispatchMentions, DispatchTextState, MentionEntity } from "../types";
import createMentionEntity from "./createMentionEntity";
import updateTextWithMentionTag from "./updateTextWithMentionTag";

interface User {
  email: string;
  firstname: string;
  lastname: string;
}

function createOnUserTaggedHandler(
  setText: DispatchTextState,
  mentions: MentionEntity[],
  setMentions: DispatchMentions
) {
  return () => {
    return function onUserTag(
      user: User,
      text: string,
      textInput: MutableRefObject<TextInput>
    ) {
      const email = user.email;

      let name = `${user.firstname} ${user.lastname}`;

      const postText = updateTextWithMentionTag(text, name);
      const textlen = postText.length;
      const userMentionEntity = createMentionEntity(textlen, name, email);

      setText(postText);
      setMentions([...mentions, userMentionEntity]);
      textInput.current.focus();
    };
  };
}

export default createOnUserTaggedHandler;
