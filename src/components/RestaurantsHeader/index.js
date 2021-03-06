import {BsFilterLeft} from 'react-icons/bs'
import './index.css'

const RestaurantsHeader = props => {
  const {activeCategory, sortByOptions, changeCategory} = props

  const changeOption = event => {
    changeCategory(event.target.value)
  }

  return (
    <div className="header-container">
      <h1 className="heading">Popular Restaurants</h1>
      <div className="option-and-description">
        <p className="description">
          Select your favourite restaurant special dish and make your day
          happy...
        </p>
        <div className="sort" data-testid="sort-by">
          <BsFilterLeft className="icon" />
          <p className="sort-by">sort by {activeCategory}</p>
          <select
            className="sort-by-select"
            value={activeCategory}
            onChange={changeOption}
            data-testid="sorting-restaurants"
          >
            {sortByOptions.map(eachOption => (
              <option
                className="select-option"
                key={eachOption.id}
                value={eachOption.value}
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
export default RestaurantsHeader
