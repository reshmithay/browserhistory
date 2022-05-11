import './index.css'

const UserHistoryItems = props => {
  const {historyItemDetails, onDeleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItemDetails

  const onDeleteHistory = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="history-list-item">
      <div className="time-content-container">
        <div className="time-container">
          <p className="browsing-time">{timeAccessed}</p>
        </div>
        <div className="history-content-container">
          <div className="content-card">
            <img src={logoUrl} alt="domain logo" className="logo-image" />
            <div className="url-content-container">
              <p className="browser-title">{title}</p>
              <p className="history-url">{domainUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="history-delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistoryItems
