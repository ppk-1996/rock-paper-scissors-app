import { useState } from 'react'
import Modal from 'react-modal'
import rule from '../assets/image-rules.svg'
import close from '../assets/icon-close.svg'

const customStylesMobile = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: 0,
    left: 0,
    height: '100vh',
    margin: 0,
    width: '100vw',
  },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function RulesMobile() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <div className="w-full flex justify-center md:justify-end">
        <button
          onClick={openModal}
          className="border-2 tracking-widest px-10 py-2 rounded-lg"
        >
          RULES
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStylesMobile}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col items-center h-full justify-between">
          <h1 className="font-bold text-3xl text-gray-700">RULES</h1>
          <div className="w-full grid place-items-center">
            <img src={rule} width="90%" />
          </div>
          <button onClick={closeModal}>
            <img src={close} width="30" />
          </button>
        </div>
      </Modal>
    </div>
  )
}
