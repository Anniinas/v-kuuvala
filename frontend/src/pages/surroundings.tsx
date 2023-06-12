import React, { useEffect } from "react";

export const Surroundings = () => {

    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4">Surroundings of The Spellbound Equine Meadows</h1>
                <p>Surrounded by the picturesque Scandinavian landscape, Spellbound Equine Meadows is nestled in a captivating setting that seamlessly blends nature's beauty with the equestrian facilities. The equine center is located in a sprawling expanse of land, enveloped by lush green fields and idyllic pastures, where horses graze contentedly under the open sky.</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={require('../img/surroundings/country_view02.jpg')} alt="Country view" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/mainbuilding.jpg')} alt="Mainbuilding" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/country_view01.jpg')} alt="Country view" className="img-thumbnail"></img>
                </div>


                <p>As you enter the grounds, the main building stands proudly, exuding a rustic charm that perfectly complements the natural surroundings. With its wooden beams and traditional Scandinavian architecture, it serves as the heart of the equine center, housing administrative offices, a cozy lounge area, and a welcoming reception where visitors are greeted with warmth and enthusiasm.</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={require('../img/surroundings/stables.jpg')} alt="Stables" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/stables_inside.jpg')} alt="Stables inside" className="img-thumbnail"></img>
                </div>
                <p>Adjacent to the main building, a series of stables line the area, providing a comfortable and safe haven for the horses. Each stable is designed with meticulous attention to detail, incorporating natural materials and ample ventilation to ensure the well-being of the equine residents. The scent of fresh hay and the soft nickering of horses create an atmosphere of tranquility and serenity.</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={require('../img/surroundings/ridingarena_inside.jpg')} alt="Ridingarena inside" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/ridingarena_outdoors.jpg')} alt="Ridingarena outdoors" className="img-thumbnail"></img>
                </div>
                <p>Further along the grounds, riding arenas and indoor halls can be found, catering to various equestrian disciplines. These spacious arenas are thoughtfully equipped with premium footing, allowing riders to practice and compete in optimal conditions. The echoes of hooves and the harmonious rhythm of horse and rider fill the air, creating an ambiance of passion and dedication.</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={require('../img/surroundings/forest01.jpg')} alt="Forest" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/cottage.jpg')} alt="Cottage in the woods" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/forest02.jpg')} alt="Forest" className="img-thumbnail"></img>
                </div>
                <p>Beyond the equestrian facilities lies a tranquil forest, offering a serene retreat for riders and visitors alike. The dense canopy of trees provides shade and a sense of seclusion, inviting individuals to wander along the winding paths, immersing themselves in the soothing embrace of nature. A charming cottage nestled amidst the trees serves as a cozy getaway, offering respite and a peaceful setting for contemplation.</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={require('../img/surroundings/sauna_building.jpg')} alt="Sauna next to lake" className="img-thumbnail"></img>
                </div>
                <p>Nearby, a shimmering lake reflects the beauty of the surroundings. A picturesque cottage, overlooking the water's edge, provides an enchanting spot for relaxation and contemplation. Next to it, a traditional sauna invites guests to indulge in the Scandinavian tradition of wellness and rejuvenation, creating a harmonious balance between physical activity and tranquil relaxation.</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={require('../img/surroundings/staff_accomodation.jpg')} alt="Staff accomodation" className="img-thumbnail"></img>
                    <img src={require('../img/surroundings/country_view03.jpg')} alt="Country view" className="img-thumbnail"></img>
                </div>
                <p>Spellbound Equine Meadows embraces the natural splendor of its Scandinavian location, seamlessly blending its equestrian facilities with the surrounding landscape. The combination of stables, arenas, the main building, accommodation cottages, the forest, the lake, and the sauna create a harmonious environment where riders, horses, and visitors can experience the beauty, tranquility, and magic of the equine world in perfect harmony with nature.</p>
            </div>
        </div >
    );
};
