import React from 'react';

function Parallax(props) {

  return (
    <div className={"Parallax " + props.backgroundImage } >
      <div className={props.centerText}>
        {props.words.split(".").map(function(item, key) {
          return (
            <span key={key}>
              {item}
              <br/>
            </span>
          )
        })}
      </div>
    </div>
  );
}

export default Parallax;