import React, { useState, Suspense } from "react";
//const OtherComponent = React.lazy(() => import("./OtherComponent"));
// load a component only when a user clicks a button:
function MyComponent() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Show Component</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          {/* <OtherComponent /> */}
        </Suspense>
      )}
    </div>
  );
}
