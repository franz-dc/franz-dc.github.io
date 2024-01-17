import React, { PropsWithChildren, useRef, useState } from 'react';

import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { Transition } from 'react-transition-group';

export type TooltipProps = PropsWithChildren<{
  /**
   * Label for the tooltip.
   */
  label: string;
  /**
   * Options to pass to the Popper.js instance.
   */
  popperOptions?: Parameters<typeof usePopper>[2];
}>;

const Tooltip = ({ label, popperOptions, children }: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    popperOptions
  );

  const [showTooltip, setShowTooltip] = useState(false);

  const show = () => {
    setShowTooltip(true);
    update?.();
  };

  const hide = () => {
    setShowTooltip(false);
  };

  const nodeRef = useRef(null);

  return (
    <>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child as React.ReactElement, {
          ref: setReferenceElement,
          key: idx,
          onMouseOver: show,
          onFocus: show,
          onMouseLeave: hide,
          onBlur: hide,
        })
      )}
      {createPortal(
        <Transition
          nodeRef={nodeRef}
          in={showTooltip}
          timeout={100}
          unmountOnExit
        >
          {(state) => {
            const isRendered = ['entering', 'entered'].includes(state);
            return (
              <div className='tooltip' ref={nodeRef}>
                <div
                  className='tooltip__popper'
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <div
                    className='tooltip__content'
                    style={{
                      transform: isRendered ? 'scale(1)' : 'scale(0)',
                      opacity: isRendered ? 1 : 0,
                    }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            );
          }}
        </Transition>,
        document.body
      )}
    </>
  );
};

export default Tooltip;
