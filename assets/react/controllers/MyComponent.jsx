// TEST (a supprimer)

import React, { useState } from 'react';

const MyComponent = ({fullName}) => {
    const [userId, setUserId] = useState("");
    return (
      <div className="app-container">
        <div className="login">
          <h3>Bonjour {fullName} </h3>
          <input
            type="text"
            placeholder="Pseudo"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
      </div>
    );
};

export default MyComponent;