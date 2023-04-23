/**
 * @file hedear.tsx
 *
 * @brief Definition of the Header component used in the application.
 */

import React from "react";

/**
  * @function Header
  *
  * @brief Functional component representing the header of the application.
  *
  * @returns {JSX.Element} - JSX element representing the header.
  */
function Header() {
  return (
    <ul>
      <li>About</li>
      <li>ROADMAP</li>
      <li>Team</li>
      <li>FAQ</li>
    </ul>
  );
}

/**
  * @brief Export the Header component as the default export for use in other files.
*/
export default Header;
