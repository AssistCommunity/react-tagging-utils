import { useCallback, useState } from "react";
import createOnUserTaggedHandler from "./lib/createOnUserTaggedHandler";
import mentionsHandler from "./lib/setMentionsOnTextChange";

import { TextState, DispatchTextState, MentionEntity } from "./types";

function useTagging([text, setText]: [TextState, DispatchTextState]) {
  const [mentions, setMentions] = useState<MentionEntity[]>([]);

  const mentionsOnTextChangeHandler = useCallback(
    mentionsHandler(setText, mentions, setMentions),
    [text, setText, mentions, setMentions]
  );

  const onUserTaggedHandlerCreator = createOnUserTaggedHandler(
    setText,
    mentions,
    setMentions
  );

  return {
    text,
    setText,
    mentions,
    setMentions,
    mentionsOnTextChangeHandler,
    onUserTaggedHandler: onUserTaggedHandlerCreator(),
  };
}

export default useTagging;
