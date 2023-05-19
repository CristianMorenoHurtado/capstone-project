import React from "react";
import starImage from '../images/star.svg'

export default class AppUser extends React.Component {
  state = {
    data: null,
    filter: ""
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=4")
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results
        });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.data &&
          this.state.data
            .filter(user => user.email.includes(this.state.filter))
            .map(user => (
              <div
                key={user.email}
                className="userWrapper"
              >
                <div className="rating">
                  <span>Rating: </span>
                  {user.registered.age % 2 ?
                <>
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                </> :
                <>
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                  <img className="star" src={starImage} alt="star" />
                </>
                }</div>
                <img src={user.picture.large} className="userImage" />
                <div><b>{user.name.first} {user.name.last}</b></div>
                <div>{user.email}</div>
              </div>
            ))}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <AppUser />
    </div>
  );
}
