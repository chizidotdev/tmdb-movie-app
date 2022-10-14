import React, { useState, useEffect, useRef } from 'react';

import './modal.scss';

interface IModal extends React.ComponentPropsWithRef<'div'> {
  active: boolean;
  id: string;
}

interface IModalContent extends React.ComponentPropsWithRef<'div'> {
  onClose: () => any;
}

const Modal = (props: IModal) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  );
};

export const ModalContent = (props: IModalContent) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    contentRef.current?.parentElement?.classList.remove('active');
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className='modal__content'>
      {props.children}
      <div className='modal__content__close' onClick={closeModal}>
        <i className='bx bx-x'></i>
      </div>
    </div>
  );
};

export default Modal;
