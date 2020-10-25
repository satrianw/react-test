import React from 'react'
import './Card.css'

function Card({src, title, bar, percentage, terkumpul, sisahari}) {
    return (
        <div className='card'>
            <img src={src} alt=""/>
            <div className="card_info">
                <h3>{title}</h3>
                <div className="bar">
                    <div className={bar}>{percentage}</div>
                </div>
                <div className="card_info2">
                    <h3 className="text_left">Terkumpul</h3>
                    <h3 className="text_right">Sisa Hari</h3>
                </div>
                <div className="card_info2">
                    <h3 className="text_left">{terkumpul}</h3>
                    <h3 className="text_right">{sisahari}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
