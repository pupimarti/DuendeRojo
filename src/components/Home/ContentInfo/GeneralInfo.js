import React from 'react';
import './generalInfo.css';


function GeneralInfo(props) {
  return (
        <ul className="list">
            {props.data && props.data.map((item, key) => 
                <li key={key} className="item">
                    <span className={"icon-"+item.icon} />
                    <div className="title">{item.title}</div>
                    {item.url?
                    <a 
                    className="description"
                    href={item.url} 
                    rel="noopener noreferrer" 
                    target="_blank">
                        {item.desc}
                    </a>:
                    <div className="description">{item.desc}</div>
                    }
                </li>
            )}
        </ul>
  );
}

export default GeneralInfo;
