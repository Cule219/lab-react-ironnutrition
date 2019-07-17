import React, { Component } from 'react'

export class FoodBox extends Component {
  render() {
    return (
      <div key={this.props.data.name} className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img height="100" src={this.props.data.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.data.name}</strong> <br />
          <small>{this.props.data.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number"
            // value="0"   
            // onChange = {changeHandler}
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
  }
}

export default FoodBox
