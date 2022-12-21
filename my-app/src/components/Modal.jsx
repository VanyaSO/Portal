import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";

const ModalElement = document.querySelector('#modal');


const Modal = ({children}) => {
    const elem = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        ModalElement.appendChild(elem)

        return () => (
            ModalElement.removeChild(elem)
        )
    });

    return createPortal(
      <div className={"modal"}>
          {children}
      </div>,
        elem
    )
}

export default Modal;