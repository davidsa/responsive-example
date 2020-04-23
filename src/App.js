import React, { Component } from "react";
import "./App.css";

const imgURL =
  "https://cdn.phonehouse.es/res/viewthree450/resource_1021864.jpg?&w=380&h=380&trim=auto&auto=format";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="img">
          <img src={imgURL} alt="" />
        </div>
        <p className="text">
          Consectetur voluptatem quibusdam quibusdam suscipit eos, facilis Sunt
          animi temporibus adipisci dolorem temporibus numquam Odit quaerat
          accusamus harum eum non! Nostrum impedit dignissimos eum nulla
          incidunt. Ullam doloribus hic quas placeat exercitationem. Aut minima
          qui ea voluptas veritatis reiciendis quis asperiores, iusto in
          aspernatur Adipisci porro blanditiis dolorem voluptas dolore.
        </p>
      </div>
    );
  }
}
