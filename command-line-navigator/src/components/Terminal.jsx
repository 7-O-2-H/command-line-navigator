// import React from 'react';

export default function Terminal() {

  //template
  return (
    <div className="terminal-window">
      <div className="title-bar">
        <div className="title-bar-btns">
          <div className="title-bar-btn close"></div>
          <div className="title-bar-btn minimize"></div>
          <div className="title-bar-btn maximize"></div>
        </div>
        <div className="title">Terminal</div>
      </div>
      <div className="content">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-btn red"></div>
            <div className="terminal-btn yellow"></div>
            <div className="terminal-btn green"></div>
          </div>
          <div className="terminal-body">
            <p>Welcome to Terminal</p>
            <p>$ _</p> {/* Placeholder for terminal input */}
          </div>
        </div>
      </div>
    </div>
  );
};
