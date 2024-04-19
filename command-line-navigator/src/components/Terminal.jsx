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
            <p>terminal@Your_Terminal your-directory % 
              <br></br>
              <br></br>
            </p>
            <p>
              &nbsp; &gt; The teriminal (along with other graphical command-line interfaces) is a tool we can use to communicate with modern computers.
              This application is designed to teach you the basics of using your terminal - particularly how to create, modify and navigate bewtween directories and files - via an interactive approach.
              <br></br>
              <br></br>
            </p>
            <p>terminal@Your_Terminal your-directory % _</p> {/* Placeholder for terminal input */}
          </div>
        </div>
      </div>
    </div>
  );
};
