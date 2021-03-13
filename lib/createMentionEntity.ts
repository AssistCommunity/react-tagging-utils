import { MentionEntity } from "../types";

export default function createMentionEntity(
  textLen: number,
  user_name: string,
  user_email: string
): MentionEntity {
  let endindex = textLen - 2;
  let startindex = endindex - user_name.length + 1;
  let text = user_name;
  return {
    startindex,
    endindex,
    user_name,
    text,
    user_email,
  };
}
