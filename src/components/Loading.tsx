import { PAPER_COLOR, ROCK_COLOR, SCISSORS_COLOR } from '../utils/global'
import './Loading.css'
const Loading = ({ size }: { size: string }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        boxShadow: '-2px -6px 2px 0px rgba(0, 0, 0, 0.3) inset',
      }}
      className="loading-ring rounded-full grid place-items-center"
    >
      <div
        style={{ boxShadow: '-2px 6px 2px 0px hsl(180, 3%, 69%) inset' }}
        className="w-3/4 h-3/4 bg-gray-100 rounded-full grid place-items-center pt-2"
      ></div>
    </div>
  )
}

export default Loading
