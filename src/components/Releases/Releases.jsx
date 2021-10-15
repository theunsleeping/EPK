import {ReleaseItem} from "./ReleaseItem";
import "./Releases.scss";

export const Releases = ({releases}) => {
    return(
        <div className="Releases">
            <h3>Official Releases:</h3>
            <div className="releases-list">
                {releases.map(({title, img, links}) => <ReleaseItem title={title} releaseImg={img} links={links} />)}
            </div>
        </div>
    )
}