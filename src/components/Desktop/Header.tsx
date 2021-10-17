import logo from '../../assets/logo.svg'

const Header = ({ score }: { score: number }) => {
  return (
    <div
      style={{ maxWidth: '40em' }}
      className="w-full px-6 py-4 border-4 border-gray-500 rounded-lg sm:flex sm:visible justify-between items-center hidden"
    >
      <img src={logo} alt="logo" height="150px" width="150px" />
      <div className="font-bold bg-gray-200 flex flex-col items-center rounded-lg leading-tight px-6 py-2">
        <span className="text-skin-score text-xl tracking-widest">SCORE</span>
        <span className="text-skin-dark" style={{ fontSize: 62 }}>
          {score}
        </span>
      </div>
    </div>
  )
}

export default Header
