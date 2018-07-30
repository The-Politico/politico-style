// TODO
import React from 'react';

const FilterList = () => (
  <ul className="search-filter-list filter-author">

      <li className="search-filter-list-item ">
        <a className="filter-link" data-filter="authors" data-fname="Andrew" data-lname="Briz" href="http://localhost:3000/cms/page/1/?fname=Andrew&amp;lname=Briz">
          Andrew Briz
        </a>
      </li>

      <li className="search-filter-list-item ">
        <a className="filter-link" data-filter="authors" data-fname="Tyler" data-lname="Fisher" href="http://localhost:3000/cms/page/1/?fname=Tyler&amp;lname=Fisher">
          Tyler Fisher
        </a>
      </li>

  </ul>
);

export default FilterList;
