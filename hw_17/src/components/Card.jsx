import React from "react";

class Card extends React.Component {
  render() {
    const cardTitle = this.props.title;
    const cardText = this.props.text;

    return (
      <div className="card">
        <div className="card-body">
          {cardTitle ? <h4 className="card-title">{cardTitle}</h4> : null}
          {cardText ? <p className="card-text">{cardText}</p> : null}
        </div>
      </div>
    );
  }
}

export default Card;
