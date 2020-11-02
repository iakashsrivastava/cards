import React, {Suspense, useState} from 'react';

import Spinner from "./components/Spinner.component.react";

const Cards = React.lazy(() => import('./containers/Cards.container.react'));
const Header = React.lazy(() => import('./containers/Header.container.react'));

function App() {
  const [searchString, setSearchString] = useState<string>('');
  return (
      <Suspense fallback={<Spinner />}>
        <Header searchString={searchString} setSearchString={setSearchString}/>
        <Cards searchString={searchString}/>
      </Suspense>
  );
}

export default App;