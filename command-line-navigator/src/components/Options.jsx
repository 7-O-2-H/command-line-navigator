// imports
import Link from "next/link";

export default function Options() {
  return (
    <div className="options">
      <Link className="option" href="/basics" >
        <div className='folder-image'>
          <img src="/images/folder.svg" alt="Folder" style={{ width: '220px', stroke: '#66A6FF'}} />
        </div>
        <div className='option-name'>
          BASICS
        </div>
      </Link>
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
