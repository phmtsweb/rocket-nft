import { ReactNode } from 'react';
import { Section } from './styles';

type SectionOneProps = {
  children: ReactNode | ReactNode[];
};

export function SectionOne({ children }: SectionOneProps) {
  return <Section>{children}</Section>;
}
