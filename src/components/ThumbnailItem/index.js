// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    clickImage(id)
  }

  const isActiveImage = isActive ? 'active-image' : 'thumbnail-image'
  console.log(isActiveImage)

  return (
    <li className="thumbnail-item">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`${isActiveImage}`}
        onClick={onClickImage}
      />
    </li>
  )
}

export default ThumbnailItem
