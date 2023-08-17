import React from "react";

const Option = (props) => {
  console.log('last opyi', props); return (


    <div className="option">
      <p className="option__text">{props.count}, {props.optionText} </p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>

  )
};

export default Option; 