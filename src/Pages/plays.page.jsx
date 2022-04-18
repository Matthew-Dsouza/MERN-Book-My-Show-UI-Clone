import React from "react";

// Components
import Poster from "../Components/Poster/poster.component";
import PlaysFilter from "../Components/PlaysFilters/playsFilter.component";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4 my-8">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    {/* poster content  */}
                    <div className=" lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays</h2>

                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-zfxqljgpfs-portrait.jpg"
                                    title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                                    subtitle="English | ₹ 199 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-zfxqljgpfs-portrait.jpg"
                                    title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                                    subtitle="English | ₹ 199 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-zfxqljgpfs-portrait.jpg"
                                    title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                                    subtitle="English | ₹ 199 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBBdWcgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00313464-zfxqljgpfs-portrait.jpg"
                                    title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                                    subtitle="English | ₹ 199 onwards"
                                />
                            </div>
                        </div>
                    </div>

                    {/* filters  */}
                    <div className="lg:w-1/4">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This weekend"]}
                            />
                            <PlaysFilter
                                title="Language"
                                tags={["Tamil", "English", "Hindi", "Gujarati"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;
