import React, {Suspense, useState} from 'react';

import Spinner from "./components/Spinner.component.react";

const Cards = React.lazy(() => import('./containers/Cards.container.react'));
const Header = React.lazy(() => import('./containers/Header.container.react'));

function App() {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Header searchString={searchString} setSearchString={setSearchString}/>
        <Cards searchString={searchString}/>
        {isSpinnerVisible && <Spinner />}
      </Suspense>
  </div>
  );
}

export default App;