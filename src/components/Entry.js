import React from "react";

export const Entry = ({ entry, mood, onEditButtonClick, onDeleteButtonClick }) => {
  const getMessageType = () => {
    if (mood) {
      switch (mood.label) {
        case 'Happy':
          return 'is-danger'
        case 'Sad':
          return 'is-success'
        case 'Insightful':
          return 'is-warning'
        case 'At Peace':
          return 'is-primary'
        default:
          break;
      }
    }
  }

  return (
    <article className={`message ${getMessageType()}`} style={{width:"100%"}}>
      <div className="message-body">
        <p className="entry__concept">{entry.concept}</p>
        <p className="entry__entry">{entry.entry}</p>
        <p className="entry__date">{entry.date}</p>
        <p className="entry__mood">{mood?.label}</p>
        {
          entry.tags?.map(tag => <p className="entry__tag">{tag.name}</p>) 
        }
        <div className="buttons">
          <button className={`button ${getMessageType()} is-outlined`} onClick={
            () => {
              onEditButtonClick(entry.id)
            }
          }>Edit</button>
          <button className={`button ${getMessageType()}`} onClick={
            () => {
              onDeleteButtonClick(entry.id)
            }
          }>Delete</button>
        </div>
      </div>
    </article>
  )
};
