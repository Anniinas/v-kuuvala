import React, { useEffect } from "react";

export const TheBjornsens = () => {

    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4">The Bjørnsens</h1>
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/sigrid_bjornsen_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Sigrid Bjørnsen</h5>
                                <p className="card-text"><small>Sigrid Bjørnsen, a confident and dedicated leader with a deep passion for horses, manages Spellbound Equine Meadows, fostering an inclusive and supportive environment while ensuring the well-being of the horses under her care.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/lars_bjornsen_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Lars Bjørnsen</h5>
                                <p className="card-text"><small>
                                    Lars Bjørnsen, Sigrid's kind-hearted and business-savvy husband, provides vital support to Spellbound Equine Meadows with his stable presence and unwavering dedication, complementing Sigrid's expertise and forming a formidable team.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/emma_bjornsen_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Emma Bjørnsen</h5>
                                <p className="card-text">
                                    <small>Emma, the free-spirited eldest child of Sigrid and Lars, inherits their passion for horses and excels as an adventurous eventing equestrian, displaying unwavering determination and fearlessness in her pursuit of excellence.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/erik_bjornsen_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Erik Bjørnsen</h5>
                                <p className="card-text">
                                    <small>Erik, the compassionate middle child, possesses a natural talent for connecting with horses and is pursuing a career in equine therapy to bring joy and comfort to others through the healing power of horses.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/sofia_bjornsen_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Sofia Bjørnsen</h5>
                                <p className="card-text">
                                    <small>Sofia, the vibrant and spirited teenage daughter, captivates with her brown curls, sparkling hazel eyes, and confident demeanor, effortlessly commanding attention and showcasing her unique style and competitive drive in the world of equestrian fashion.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
