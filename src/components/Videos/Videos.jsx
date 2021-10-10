import React from "react";
import "./Videos.scss";
import { VIDEOS_DATA } from "../../data/Videos";
import YouTube from "react-youtube";

export const Videos = () => {
    return (
        <div className="Videos">
            {VIDEOS_DATA.map(video => (
                <div className="videoItem">
                    <a href="">
                        <img src={video.img} alt="" />
                        <span className="videoOverlay"></span>
                    </a>
                </div>
            ))}
        </div>
    );
}