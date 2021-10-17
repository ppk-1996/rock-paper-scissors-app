import { useState } from 'react'
import Modal from 'react-modal'
import rule from '../../assets/image-rules.svg'
import close from '../../assets/icon-close.svg'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function Rules() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="hidden sm:block">
      <div className="w-full flex justify-center sm:justify-end">
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
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between mb-8">
          <h1 className="font-bold text-3xl text-gray-700">RULES</h1>
          <button onClick={closeModal}>
            <img src={close} />
          </button>
        </div>
        <div className=" grid place-items-center">
          <img src={rule} width="450" />
        </div>
      </Modal>
    </div>
  )
}
