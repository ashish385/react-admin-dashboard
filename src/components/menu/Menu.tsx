import { Link } from "react-router-dom"
import './menu.scss'
import {menu} from '../../data'


const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div key={item.id} className="item">
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} to={listItem.url} className="listItem">
              <img src={listItem.icon} alt="" />
              <div className="listItemTitle">{ listItem.title}</div>
            </Link>
          ))}

        </div>
      ))}
    </div>
  );
}

export default Menu