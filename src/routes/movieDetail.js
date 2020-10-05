import React from "react";
import "./movieDetail.css";

class movieDetail extends React.Component {
  state = {
    detail: true,
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    window.scrollTo(0, 0);
    if (this.state.detail) {
      document.querySelector("#header").style.position = "absolute";
      document.querySelector("#header").style.backgroundColor = "transparent";
    }
    const $card = document.querySelector("#poster");
    if ($card) {
      $card.addEventListener("mousemove", function (e) {
        var width = this.clientWidth;
        var height = this.clientHeight;
        var x = e.offsetX;
        var y = e.offsetY;
        var X = Math.floor(20 * (x / width) - 10);
        var Y = Math.floor(20 * (y / height) - 10);
        this.style.setProperty("--x", Y + "deg");
        this.style.setProperty("--y", X + "deg");
        console.log(y, Y);
      });

      $card.addEventListener("mouseleave", function () {
        this.style.setProperty("--x", "0deg");
        this.style.setProperty("--y", "0deg");
      });
    }
  }
  render() {
    const { state } = this.props.location;
    if (state) {
      return (
        <div className="detailPage">
          <img className="bg" src={state.bg} alt={state.title} />
          <div className="detailBox">
            <ul>
              <li>
                <img id="poster" src={state.posterL} alt={state.title} />
              </li>
              <li>
                <h2 className="title">{state.title}</h2>
                <span className="runtime">{state.runtime}분</span>
                <span className="year">{state.year}년</span>
                <ul className="genre">
                  {state.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>;
                  })}
                </ul>
                <p className="summary">{state.summary}</p>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default movieDetail;
