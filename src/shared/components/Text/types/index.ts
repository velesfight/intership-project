import { ComponentProps, HTMLAttributes } from 'react';

export type TextVariant =
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'text1'
  | 'text2'
  | 'caption1'
  | 'button1';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'content1'
  | 'content2'
  | 'content3'
  | 'white'
  | 'success'
  | 'error';

export type TextWeight = 400 | 500 | 600 | 700;

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextElement = HeadingElement | 'p' | 'span';

export interface BaseTextProps {
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  as?: TextElement;
}

interface HeadingProps extends ComponentProps<'h1'> {
  as: HeadingElement;
}

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: 'p';
}

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  as: 'span';
}

export type TextElementProps = HeadingProps | ParagraphProps | SpanProps;

export type TextProps = BaseTextProps & TextElementProps;
