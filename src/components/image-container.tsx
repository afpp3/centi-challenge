import { Image } from '../pages/queries'

type ImageContainerProps = {
  image: Image
}

export const ImageContainer = ({ image }: ImageContainerProps) => {
  return (
    <div className="max-w-sm h-72 overflow-hidden relative">
      <img
        src={image.link}
        alt={image.link}
        loading="lazy"
        // height={image.height}
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="bg-[#474a51] absolute bottom-0 left-0 w-full px-2 h-12 rounded-b-lg overflow-hidden">
        <p
          className="text-ellipsis overflow-hidden text-xs text-white pt-2 h-10"
          style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
        >
          {image.description ?? 'Sem descrição'}
        </p>
      </div>
    </div>
  )
}
