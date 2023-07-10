import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const year = this.props.data.date.getFullYear();
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {year}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
