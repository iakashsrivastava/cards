import React, {Suspense, useState} from 'react';

import Spinner from "./components/Spinner.component.react";

const Cards = React.lazy(() => import('./containers/Cards.container.react'));

function App() {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState<boolean>(false);
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Cards />
        {isSpinnerVisible && <Spinner />}
      </Suspense>
  </div>
  );
}

export default App;