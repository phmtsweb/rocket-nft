import { ReactNode } from 'react';
import { Section } from './styles';

type SectionTwoProps = {
  children: ReactNode | ReactNode[];
};

export function SectionTwo({ children }: SectionTwoProps) {
  return <Section>{children}</Section>;
}
