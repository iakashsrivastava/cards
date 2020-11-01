import React from 'react';

interface Props {
    data: any
}

const Card: React.FC<Props> = ({data}) => {
    console.log("data", data)
    return (
        <div className="card">
            <img className="card-img-top" src={data.imageUrl} alt="Card image cap" />
            <div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            </div>
        </div>
    )
}

export default Card
