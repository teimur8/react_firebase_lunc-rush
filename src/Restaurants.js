import React, { Component, PropTypes } from "react";
import Restaurant from "./Restaurant";
import map from "lodash/map";
import { restaurants } from "./firebase";
import "./Restaurants.css";

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect = key => {
    const { user } = this.props;
    restaurants
      .child(key)
      .child("votes")
      .child(user.uid)
      .set(user.email);
  };

  handleDeselect = key => {
    const { user } = this.props;
    restaurants
      .child(key)
      .child("votes")
      .child(user.uid)
      .remove();
  };

  render() {
    const { restaurants, user } = this.props;

    return (
      <section className="Restaurants">
        {map(restaurants, (val, key) => (
          <Restaurant
            key={key}
            {...val}
            handleSelect={() => this.handleSelect(key)}
            handleDeselect={() => this.handleDeselect(key)}
            user={user}
          />
        ))}
      </section>
    );
  }
}

Restaurants.propTypes = {
  user: PropTypes.object,
  restaurantsRef: PropTypes.object,
  restaurants: PropTypes.object
};

export default Restaurants;
