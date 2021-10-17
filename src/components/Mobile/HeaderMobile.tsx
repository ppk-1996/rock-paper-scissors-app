import logo from '../../assets/logo.svg'

const HeaderMobile = ({ score }: { score: number }) => {
  return (
    <div className="w-full px-6 py-4 border-4 border-gray-500 rounded-lg flex justify-between items-center sm:hidden">
      <img src={logo} alt="logo" height="100px" width="100px" />
      <div className="font-bold bg-gray-200 flex flex-col items-center px-6 py-2 rounded-lg leading-tight">
        <span className="text-skin-score text-xs tracking-widest">SCORE</span>
        <span className="text-skin-dark" style={{ fontSize: 42 }}>
          {score}
        </span>
      </div>
    </div>
  )
}

export default HeaderMobile
