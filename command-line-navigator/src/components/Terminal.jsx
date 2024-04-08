// import React from 'react';

export default function Terminal() {

  //template
  return (
    <div className="terminal-window">
      <div className="title-bar">
        <div className="title-bar-btns">
          <div className="title-bar-btn-close"></div>
          <div className="title-bar-btn-minimize"></div>
          <div className="title-bar-btn-maximize"></div>
        </div>
        <div className="title">Terminal</div>
      </div>
      <div className="content">
        <div className="terminal">
          <div className="terminal-body">
            <p>terminal@Your_Terminal your-directory % _</p> {/* Placeholder for terminal input */}
          </div>
        </div>
      </div>
    </div>
  );
};
