import React from "react";
import "./input.css";

export default function Input(props) {
  return (
    <div className="input">
      <div className="heading">Search A Currency</div>
      <form className="input-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          className="input-area"
          value={props.value}
          onSubmit={props.handleSubmit}
          placeholder=""
          onChange={(e) => 
            props.setSearch(e.target.value)
          }
        />
      </form>
    </div>
  );
}
