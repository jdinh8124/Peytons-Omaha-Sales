import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberIndex: 0 };
    this.arrayOfPics = this.props.img;
    this.arrowClickLeft = this.arrowClickLeft.bind(this);
    this.arrowClickRight = this.arrowClickRight.bind(this);
    this.dotButtonClick = this.dotButtonClick.bind(this);
  }

  picToArray() {
    return this.arrayOfPics[this.state.numberIndex];
  }

  arrowClickLeft() {
    if (this.state.numberIndex === 0) {
      this.setState(previousState => ({ numberIndex: this.arrayOfPics.length - 1 }));
      return;
    }
    this.setState(previousState => ({ numberIndex: this.state.numberIndex - 1 }));
  }

  arrowClickRight() {
    if (this.state.numberIndex === this.arrayOfPics.length - 1) {
      this.setState(previousState => ({ numberIndex: 0 }));
      return;
    }
    this.setState(previousState => ({ numberIndex: this.state.numberIndex + 1 }));
  }

  timerPic() {
    if (this.state.numberIndex === this.arrayOfPics.length - 1) {
      this.setState(previousState => ({ numberIndex: 0 }));
    } else {
      this.setState(previousState => ({ numberIndex: this.state.numberIndex + 1 }));
    }
  }

  componentDidMount() {
    this.pictureTimer = setInterval(
      () => this.timerPic(),
      3000
    );
  }

  componentDidUpdate() {
    clearInterval(this.pictureTimer);
    this.pictureTimer = setInterval(
      () => this.timerPic(),
      3000
    );
  }

  buttonsToRender() {
    let counter = 0;
    const arrayButtonsToReturn = [];
    for (let i = 0; i < this.arrayOfPics.length; i++) {
      if (this.state.numberIndex === i) {
        arrayButtonsToReturn.push(<i onClick={this.dotButtonClick} className="fas fa-circle" key={counter} id={counter}></i>);
        counter++;
      } else {
        arrayButtonsToReturn.push(<i onClick={this.dotButtonClick} className="far fa-circle" key={counter} id={counter} ></i>);
        counter++;
      }
    }
    return arrayButtonsToReturn;
  }

  dotButtonClick(event) {
    const numberOfDot = parseInt(event.target.id);
    this.setState(previousState => ({ numberIndex: numberOfDot }));
  }

  render() {
    const picToRender = this.picToArray();
    const buttons = this.buttonsToRender();
    return (
      <div className="gallery">
        <div className="arrowPlusPic">
          <div className='leftArrow' onClick={this.arrowClickLeft}><i className="arrow fas fa-chevron-left"></i></div>
          <div><img className="pokePic" src={picToRender} alt="picture of Pokemon" />
          </div>
          <div className='rightArrow' onClick={this.arrowClickRight} ><i className="arrow fas fa-chevron-right"></i></div>
        </div>
        <div className='pokeDots'>{buttons}</div>
      </div>
    );
  }
}
