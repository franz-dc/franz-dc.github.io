import { HTMLAttributes, PropsWithChildren } from 'react';

export type SectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  /**
   * Add bottom margin.
   */
  gutterBottom?: boolean;
  /**
   * Add background blur.
   */
  backgroundBlur?: boolean;
};

const Section = ({
  children,
  gutterBottom,
  backgroundBlur,
  ...rest
}: SectionProps) => {
  return (
    <div
      {...rest}
      className={`section ${rest.className || ''}`}
      style={{
        marginBottom: gutterBottom ? '1rem' : undefined,
        backdropFilter: backgroundBlur ? 'blur(16px)' : undefined,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
