// imports

export default function Options() {
  return (
    <div className="options">
      {/* <Folder />
      <Folder />
      <Folder /> */}
      <div className="option" >
        <div className='folder-image'>
          <img src="/images/folder.svg" alt="Folder" style={{ width: '220px', stroke: '#66A6FF'}} />
        </div>
        <div className='option-name'>
          BASICS
        </div>
      </div>
      <div className="option" >
        <div className='folder-image'>
        <img src="/images/folder.svg" alt="Folder" style={{ width: '220px'}} />
        </div>
        <div className='option-name'>
          TUTORIAL
        </div>
      </div>
      <div className="option" >
        <div className='folder-image'>
        <img src="/images/folder.svg" alt="Folder" style={{ width: '220px'}} />
        </div>
        <div className='option-name'>
          CHALLENGE
        </div>
      </div>

    </div>   
  );
}
