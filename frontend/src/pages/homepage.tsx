import React, { useEffect } from "react";

export const Homepage = () => {

  return (
    <div className="row">
        <div className="col-md-8">
        <div className="jumbotron">
            <h1 className="display-4">Experience the Wonder of Spellbound Equine Meadows!</h1>
            <p className="lead">Embark on a journey like no other at Spellbound Equine Meadows. Experience the beauty and power of our majestic 
            horses as they gallop through the meadows, creating an atmosphere of wonder and excitement.</p>
            <hr className="my-4" />
        </div>

        <p>Drawing inspiration from the rich Nordic heritage and the captivating landscapes of Scandinavia, our equine center stands as a testament 
            to the region's equestrian legacy. Spanning across vast grounds, our stables house a diverse array of horse breeds, allowing visitor to explore
             and engage with a wide variety of equine companions.</p>
        <p>Within the immersive world of Spellbound Equine Meadows, you'll discover a comprehensive range of disciplines to indulge your equestrian aspirations. 
            Whether your heart yearns for the elegance of dressage, the exhilaration of show jumping, or the timeless charm of western riding, our equine center 
            provides a platform for you to pursue your chosen path.</p>
        <p>At Spellbound Equine Meadows, we invite you to embark on a journey that blends history, realism, and the unwavering bond between horse and rider. 
            Discover the joy of equestrian pursuits and unlock your true potential in the captivating world of our equine center.</p>
        <p>Join us now and experience the excitement and diversity that awaits you at Spellbound Equine Meadows, where passion and equestrian excellence converge.</p>
        <p>The owner of Spellbound Equine Meadows,<br /> Tilli</p>
        </div>
        <div className="col-md-4">
      <div className="card" style={{ textAlign: "center", border: "none"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ borderBottom: "none"}}><img src={require('../img/homepage01.jpg')} /></li>
          <li className="list-group-item"><img src={require('../img/homepage02.jpg')} /></li>
          <li className="list-group-item"><img src={require('../img/homepage03.jpg')} /></li>
        </ul>
      </div>
    </div>
    </div>
    );
};
