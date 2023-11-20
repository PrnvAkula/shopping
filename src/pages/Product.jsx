import React from 'react'


const Product = (props) => {
    const {id,productName,productImage,biddingPrice,biddingTime} = props.data;

  return (
    <div className="shop">
        <div className="item">
            <img src={productImage}/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    Bidding Price: Rs.{biddingPrice}
                </p>
                <p>
                    Bidding starts at:{biddingTime}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Product
