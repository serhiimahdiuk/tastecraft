import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1170 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.5} d='M0 1H1170' stroke='#EBEAED' strokeWidth={2} strokeLinecap='square' />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
