import React, {Suspense} from 'react';

import { get } from "./../utilities/Api.helper";

const Card = React.lazy(() => import('./../components/Card.component.react'));

const Cards = () => {
    const c = get()?? [];
    console.log(c);
    return (
        <div className="row">
            <div className="col-xs-3 col-md-3">
                {c.map(c1 => 
                    <Suspense fallback={<></>}>
                        <Card data={c1} key= {c1.id}/>
                    </Suspense>
                )}
            </div>
        </div>
    )
}

export default Cards;
