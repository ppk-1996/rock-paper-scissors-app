import Ring from '../Ring'
import scissors from '../../assets/icon-scissors.svg'
import paper from '../../assets/icon-paper.svg'
import rock from '../../assets/icon-rock.svg'
import triangle from '../../assets/bg-triangle.svg'
import { PAPER_COLOR, ROCK_COLOR, SCISSORS_COLOR } from '../../utils/global'

const Choice = ({ startGame }: { startGame: (choice: number) => void }) => {
  const ringSize = '180px'
  return (
    <div className="hidden sm:block">
      <div className="grid grid-cols-4 place-items-center w-max relative ">
        <img src={triangle} className="absolute bottom-30" />

        <div
          className={`col-span-2 mx-7 relative  cursor-pointer rounded-full`}
          onClick={() => startGame(0)}
        >
          <Ring size={ringSize} img={paper} color={PAPER_COLOR} />
        </div>
        <div
          className={`col-span-2 relative  cursor-pointer`}
          onClick={() => startGame(1)}
        >
          <Ring size={ringSize} img={scissors} color={SCISSORS_COLOR} />
        </div>
        <div
          className={`col-span-4 relative  cursor-pointer mt-7`}
          onClick={() => startGame(2)}
        >
          <Ring size={ringSize} img={rock} color={ROCK_COLOR} />
        </div>
      </div>
    </div>
  )
}

export default Choice
