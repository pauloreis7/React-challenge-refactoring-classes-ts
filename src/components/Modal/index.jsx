import { useState, useEffect } from 'react'
import ReactModal from 'react-modal'

export function Modal({ children, isOpen }) {
  const [ modalStatus, setModalStatus ] = useState(isOpen)

  useEffect(() => {
    if (isOpen) {
      setModalStatus({ modalStatus: isOpen })
    }
  }, [isOpen])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setModalStatus}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  )
}
