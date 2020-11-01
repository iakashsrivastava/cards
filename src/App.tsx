import React, {Suspense} from 'react';

import Spinner from "./components/Spinner.component.react";

const Cards = React.lazy(() => import('./containers/Cards.container.react'));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Cards />
      </Suspense>
  </div>
  );
}

export default App;