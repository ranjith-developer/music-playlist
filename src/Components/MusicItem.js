import {AiOutlineDelete} from 'react-icons/ai'
import './Styles.css'

const MusicItem = props => {
  const {musicDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const onDeleteTrack = () => {
    onClickDelete(id)
  }

  return (
    <li className="playlist-container">
      <div className="music-info-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p>{duration}</p>
        <button
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
          className="del-btn"
        >
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
