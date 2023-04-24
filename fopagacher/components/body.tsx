/**
 * @file body.tsx
 *
 * @brief Definition of the Body component used in the application.
 */


/**
 * @function Body
 *
 * @brief Functional component representing the body of the application.
 *
 * @returns {TSX.Element} - TSX element representing the body.
 */

import React from "react";
import Title from "./title";
import Logo from "./logo";
import Resume from "./resume";

function Body() {
  return (
    <div>
      <h1>Body components</h1>
      <Title />
      <Logo />
      <Resume />
    </div>
  );
}

/**
 * @brief Export the Body component as the default export for use in other files.
 */
export default Body;
