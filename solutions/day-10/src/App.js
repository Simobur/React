import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { btnStyle } from "./styles/button-styles";
import Button from "./shared/Button";
import Handlers from "./components/eventsHandler/Handlers";

// export const App = () => <h1>Welcome on my website!</h1>;

class App extends React.Component {
  state = {};

  message = () => console.log("Alert");
  render() {
    const data = {
      welcome: "Hello",
      title: "Title of titles",
      subtitle: "Subtitle of a header",
      author: {
        firstName: "Simon",
        lastName: "Burek",
      },
      date: new Date(),
    };
    return (
      <div>
        <Header data={data} />
        <Button text="Przycisk" onClick={this.message} />
        <Footer data={data} />
        <Handlers />
      </div>
    );
  }
}

export default App;
