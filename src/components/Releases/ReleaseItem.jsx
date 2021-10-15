export const ReleaseItem = ({title, releaseImg, links}) => {
    return(
        <div className="ReleaseItem">
            <h4>{title}</h4>
            <img src={releaseImg} alt={title}/>
            <div className="release-links">
                {links.appleMusic && <a href={links.appleMusic}>Apple Music</a> }
                {links.spotify && <a href={links.spotify}>Spotify</a>}
                {links.youtubeMusic && <a href={links.youtubeMusic}>YouTube Music</a>}
            </div>
        </div>
    )
}