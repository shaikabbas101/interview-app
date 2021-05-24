import './index.css'
import {Component} from 'react'

class Filters extends Component {
  renderDifficultyLevelOption = () => {
    const {levelsData} = this.props
    return levelsData.map(eachLevel => (
      <option key={eachLevel.id} className="option" value={eachLevel.level}>
        {eachLevel.level}
      </option>
    ))
  }

  renderLanguageOption = () => {
    const {languageData} = this.props
    return languageData.map(eachLanguage => (
      <option
        key={eachLanguage.id}
        className="option"
        value={eachLanguage.language}
      >
        {eachLanguage.language}
      </option>
    ))
  }

  onChangeLanguageOptions = event => {
    const {onChangeLanguage} = this.props
    const {value} = event.target
    return onChangeLanguage(value)
  }

  onChangeDifficultyLevelOptions = event => {
    const {onChangeDifficultyLevel} = this.props
    const {value} = event.target
    return onChangeDifficultyLevel(value)
  }

  render() {
    return (
      <div className="select-filter">
        <div className="select-options">
          <label htmlFor="language" className="filter-name">
            LANGUAGE
          </label>
          <select
            className="selected-item"
            onChange={event => this.onChangeLanguageOptions(event)}
          >
            {this.renderLanguageOption()}
          </select>
        </div>
        <div className="select-options">
          <label htmlFor="difficulty-level" className="filter-name">
            DIFFICULTY LEVEL
          </label>
          <select
            className="selected-item"
            onChange={event => this.onChangeDifficultyLevelOptions(event)}
          >
            {this.renderDifficultyLevelOption()}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
