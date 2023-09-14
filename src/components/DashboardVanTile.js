import React from 'react'
import vanExample from '../img/van-example.png'

const DashboardVanTile = ({ withButton, van }) => {
    const { name, price, imageUrl,  } = van

    return (
        <div className="DashboardVanTile">
            <div className="left">
                <div className="img-container">
                    <img src={imageUrl} />
                </div>

                <div className="info">
                    <div className="name">{name}</div>
                    <div className="price">${price}/day</div>
                </div>
            </div>

            {withButton && <button className="details-btn">Edit</button>}
        </div>
    )
}

export default DashboardVanTile
