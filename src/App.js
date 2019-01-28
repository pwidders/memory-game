import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  //same as friends : friends
  //when defining object properties with ES6, 
  //if the object's key and value have the same name, 
  //we can omit the colon — this is just an optional shorthand syntax.
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //We include only friends with an id property not equal to the id being received into this method. 
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    //when we update our component's state by removing one of the friend objects, our component re-renders itself.
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  //whenever we map over a list of data and return JSX, 
  //React wants us to give each element a unique key prop. React uses this value internally to help it efficiently render 
  //and re-render components from arrays of data.

  //the key prop is unusual because it's used by React but 
  //isn't actually available for us to use inside of the component we pass it to. We pass the friend id in as a separate prop because we'll need it inside of the FriendCard component.
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
