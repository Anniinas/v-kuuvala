import React, { useEffect } from "react";

export const Staff = () => {

    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4">Staff</h1>
                <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/isabella_santoro_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Isabella Santoro</h5>
                                <p className="card-text"><small>Isabella Santoro, a renowned Italian dressage instructor with an elegant riding style and deep passion for the art of dressage, is a sought-after instructor globally, offering a unique perspective and expertise in classical dressage techniques to the equine center.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/niklas_muller_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Niklas Müller</h5>
                                <p className="card-text"><small>
                                    Niklas Müller, a skilled German show jumping instructor renowned for his technical prowess and meticulous attention to detail, brings an international flair to the equine center's training program with his strong background in the German show jumping tradition and track record of training successful riders and horses.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/gabrielle_dupont_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Gabrielle Dupont</h5>
                                <p className="card-text">
                                    <small>
                                        Gabrielle Dupont, a skilled French dressage instructor, imparts her artistry and finesse in the dressage arena, emphasizing the classical principles of lightness and harmony to inspire riders to cultivate a true partnership with their horses, infusing the equine center with a touch of French elegance.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/jesse_ramirez_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Jesse Ramirez</h5>
                                <p className="card-text">
                                    <small>Jesse Ramirez, a highly respected Western pleasure and horsemanship instructor, enhances riders' performance in these disciplines through his keen attention to detail, focus on finesse, and patient teaching style, creating a positive learning environment and refining the subtleties of body position and communication between horse and rider.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="card" style={{ width: "13rem" }}>
                            <img className="card-img-top" src={require('../img/klara_bergman_portrait_thumb.jpg')} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Klara Bergman</h5>
                                <p className="card-text">
                                    <small>Klara Bergman, a dedicated and inspiring instructor for young riders, fosters a fun and supportive environment that cultivates confidence and a love for horses, nurturing young equestrians as they learn the fundamentals of riding.</small></p>
                                <a href="#" className="btn btn-primary">Read more...</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
