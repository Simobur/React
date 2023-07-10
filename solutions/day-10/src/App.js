import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// export const App = () => <h1>Welcome on my website!</h1>;

class App extends React.Component {
  state = {};
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
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
