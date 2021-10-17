const Ring = ({ size, img, color }: ringProps) => {
  return (
    <div
      style={{
        width: size,
        aspectRatio: '1',
        backgroundImage: color,
        boxShadow: '-2px -6px 2px 0px rgba(0, 0, 0, 0.3) inset',
      }}
      className="rounded-full grid place-items-center"
    >
      <div
        style={{ boxShadow: '-2px 6px 2px 0px hsl(180, 3%, 69%) inset' }}
        className="w-3/4 h-3/4 bg-gray-100 rounded-full grid place-items-center"
      >
        <img src={img} alt="choice" className="w-1/2" />
      </div>
    </div>
  )
}

export default Ring
