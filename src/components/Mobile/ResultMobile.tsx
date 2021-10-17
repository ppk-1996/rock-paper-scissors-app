import Ring from '../Ring'
import Loading from '../Loading'

const ResultMobile = ({
  gameResult,
  userChoice,
  loading,
  houseChoice,
  endGame,
}: resultProps) => {
  const ringSize = '200px'
  return (
    <div className="w-full flex flex-col justify-evenly h-full sm:hidden">
      <div className="flex w-full justify-between">
        <div className="grid place-items-center">
          <div
            className={`${
              gameResult == 'YOU WIN' && 'winner-shadow'
            } rounded-full`}
          >
            <Ring
              size={ringSize}
              img={userChoice.img}
              color={userChoice.color}
            />
          </div>
          <p className="tracking-widest mt-7">YOU PICKED</p>
        </div>
        <div className="grid place-items-center">
          {loading ? (
            <Loading size={ringSize} />
          ) : (
            <div
              className={`${
                gameResult == 'HOUSE WIN' && 'winner-shadow'
              } rounded-full`}
            >
              <Ring
                size={ringSize}
                img={houseChoice.img}
                color={houseChoice.color}
              />
            </div>
          )}

          <p className="tracking-widest mt-7">THE HOUSE PICKED</p>
        </div>
      </div>
      {loading ? (
        <div style={{ height: 130 }}></div>
      ) : (
        <div className="grid place-items-center" style={{ height: 130 }}>
          <h2 style={{ fontSize: '4rem' }}>{gameResult}</h2>

          <button
            onClick={endGame}
            type="button"
            className="rounded-lg bg-gray-200 text-skin-dark py-3 px-16 tracking-widest text-lg"
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  )
}

export default ResultMobile
