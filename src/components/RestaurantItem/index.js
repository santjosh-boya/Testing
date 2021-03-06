import {Link} from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'
import './index.css'

const RestaurantItem = props => {
  const {restaurantDetails} = props
  const {id, imageUrl, name, cuisine, userRating} = restaurantDetails
  return (
    <Link to={`/restaurant/${id}`} className="link-item">
      <li className="restaurant-item" data-testid="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="thumbnail" />
        <div className="details">
          <h1 className="head">{name}</h1>
          <p className="type-of-food">{cuisine}</p>
          <div className="rating-container-restaurant">
            <AiOutlineStar className="star" />
            <p className="rating">{userRating.rating}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantItem
