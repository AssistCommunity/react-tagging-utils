import React, {SetStateAction, useState} from 'react';

export type TextState = string;
export type DispatchTextState = React.Dispatch<SetStateAction<TextState>>
export type DispatchMentions = React.Dispatch<SetStateAction<MentionEntity[]>>

export interface MentionEntity {
  startindex: number;
  endindex: number;
  user_name: string;
  text: string;
  user_email: string;
}