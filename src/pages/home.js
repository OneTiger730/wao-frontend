import React from "react"

export default function Home() {
  return (
    <div className="background-main">
      <div className="home-modal">
        <div className="position">
          <button className="img-button">
            <img src="./assets/home/image2.png" alt="img-button" />
          </button>
        </div>
      </div>
      <div className="buttons">
        <button className="img-button mar-3">
          <img src="./assets/home/image3.png" alt="img-home-button" />
        </button>
        <button className="img-button">
          <img src="./assets/home/image4.png" alt="img-market-button" />
        </button>
      </div>
    </div>
  )
}
