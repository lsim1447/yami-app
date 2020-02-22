import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar(props: any) {
  return (
    <div>
      <ul>
        <li>
          <a href="/cards">Cards</a>
        </li>
        <li>
          <a href="/notfound">Page Not Found </a>
        </li>
      </ul>
      { props.children }
    </div>
  );
}

export default NavigationBar;
