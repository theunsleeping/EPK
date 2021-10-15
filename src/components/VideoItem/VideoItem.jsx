import React, {useState} from "react";
import "./VideoItem.scss";

export const VideoItem = ({title, id}) => {
    return (
        <div className="VideoItem">
            <h4 className="video-title">{title}</h4>
            <div className="videoContainer">
                <iframe
                    className="video"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer;; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}