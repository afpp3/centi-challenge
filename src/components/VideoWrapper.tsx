import { Image } from '../pages/queries'

type VideoWrapperProps = {
  image: Image
}

export const VideoWrapper = ({ image }: VideoWrapperProps) => {
  return (
    <div key={image.id} className="max-w-sm h-72 overflow-hidden relative">
      <video
        src={image.link}
        autoPlay
        muted
        loop
        // height={image.height}
        className="h-full w-full object-cover rounded-lg"
      >
        <source src={image.link} />
      </video>
      <div className="bg-[#474a51] absolute bottom-0 left-0 w-full px-2  rounded-b-lg h-12 overflow-hidden">
        <p
          className="text-ellipsis overflow-hidden text-xs text-white h-10 pt-2"
          style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {image.description ?? 'Sem descrição'}
        </p>
      </div>
    </div>
  )
}
