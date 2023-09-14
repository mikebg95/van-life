import React from 'react'

const DashboardVanTile = ({ withButton, van }) => {
    const { name, price, imageUrl,  } = van

    return (
        <div className="DashboardVanTile">
            <div className="left">
                <div className="img-container">
                    <img src={imageUrl} alt={name} />
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
