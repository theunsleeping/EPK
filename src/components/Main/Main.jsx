import "./Main.scss"
import {VideoItem} from "../VideoItem/VideoItem";
import MainImg1 from "../../assets/HeaderImg4.jpg"
import {Releases} from "../Releases/Releases";

export const Main = () => {
    const releases = [
        {
            title: "Deviatve (2018)",
            img: "https://lh3.googleusercontent.com/fRCK4jV5x0iKkAKqvS5Jsqc8Fp0mH1WyTTvlrf3pdAnTT3jiXiSrHCv5H14DPpZ9PMY-N104pojhVpU=w544-h544-l90-rj",
            links: {
                spotify: "https://open.spotify.com/album/7ejEMNR9krjU6f8dXxjaAW",
                youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_m2S7ZfgYUSuHsQ3ntnXA7iJU3z-KmghNs",
                appleMusic: "https://music.apple.com/us/album/deviatve-ep/1485077039"
            }
        },
        {
            title: "PTAHA FRED (2020)",
            img: "https://lh3.googleusercontent.com/Mv_iWWwDVEyE036We7L41BxvE89sG3fW5N9VgVzOSUEynA4dWHQXL5LsZUguoYWE_GO0iIM0GFH3yW30pw=w544-h544-l90-rj",
            links: {
                spotify: "https://open.spotify.com/album/3lwdvKz5BpHiBWO2Q9RmJs",
                youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_nEV1src-XR0xgQiMXYS3x420q-ZztAJe0",
                appleMusic: "https://music.apple.com/us/album/ptaha-fred-single/1508981712"
            }
        },
        {
            title: "Припустим (2020)",
            img: "https://lh3.googleusercontent.com/ufTvksAY5uo1tKQzyZ6vXE7Jr98cg_xD1MrDy2MaGjwV0f5VOdvA5DZL2eMl8bw9n52YZDv4K6P5B4A=w544-h544-l90-rj",
            links: {
                spotify: "https://open.spotify.com/album/4xj7HoZC7dzC3KTK97dmcO",
                youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_khu9C8WWpj5WumAjoR_DvRGRejd3cC40c",
                appleMusic: "https://music.apple.com/us/album/%D0%BF%D1%80%D0%B8%D0%BF%D1%83%D1%81%D1%82%D0%B8%D0%BC-single/1515690241"
            }
        }
    ];
    return(
        <div className="Main">
            <div className="generalInfo">
                <p>
                    This Ukrainian indie-rock band is still ‘under the radar’ in Europe, but it won’t be that way for long.
                    Meet The Unsleeping: five guys who will get your body moving from the first riffs, feeling a myriad of emotions.
                    Formed back in 2013, the band had a pretty long & winding road to get to where they are now.
                </p>
                <p>
                    It all started in Uman, a small provincial town in central Ukraine with a couple of so-so rehearsing spots.
                    Some of the band members met in school and played in numerous rock bands, thanks to the alternative rock of 90s that united them.
                    Later, most of the band members chose the capital city Kyiv as their base.
                </p>
                <p>
                    Over the course of 8 years, The Unsleeping has released two EPs, several critically acclaimed singles,
                    and has presented the live video Fire Of Red, which led the band to Sziget Festival in 2019.
                    The fact that ‘total unknowns’ won the selection, surpassing famous Ukrainian bands,
                    proves that there’s something special in these guys.
                    A quick note: they did it in dresses, because - why not?As a result, the band got their first sold-out
                    concert, hundreds of thousands views on YouTube, invitations to the top Ukrainian music festivals, and touring experience.
                </p>
                <VideoItem id={"S2VrOxR9Ho4"} title='"FIRE OF RED" (Live)' />
                <div className="mainImg--container">
                    <img src={MainImg1}/>
                </div>
                <p>
                    Speaking of style, The Unsleeping identify their genre as ‘bedroom punk’. They organically combine
                    destructive rock with tender melodies, occasionally switching from clean vocals to roaring extremes.
                    A must-listen example of this eclectic style is the band’s single Ptaha Fred, which also became
                    the top song of 2020 in Ukraine.
                </p>
                <p>
                    Conceptually speaking, The Unsleeping touches on topics of escapism, existential crises and even death.
                    One example of that is their 2018 EP Deviatve, with the melancholic yet dynamic key track You Drive My Four Wheel Coffin.
                    Nevertheless, the band’s main message remains sincerity, along with a call to express genuine emotions of all kinds.
                </p>
                <p>
                    With a manager from the film industry on board, The Unsleeping has a variety of well-directed music videos
                    full of unexpected plots and surprisingly high-level acting from the band members themselves. This approach,
                    and the Stanislavsky acting system, definitely helps the band to stand out and gracefully improvise during
                    their wild live performances. One of their dreams is to create a whole production company to produce top-notch
                    content for themselves and other like-minded musicians.
                </p>
                <p>
                    At present, the band has just finished their Ukrainian tour of 15+ cities and is still performing at
                    the biggest Ukrainian music festivals. The Unsleeping are bursting with motivation & musical material
                    ready for release in the upcoming months. Rumor has it that their new tracks will be even heavier and
                    more mind-blowing, which would be almost criminal to miss out on.
                </p>
                <VideoItem id="HjxBfTknY-s" title="You Drive My Four Wheel Coffin (Official Video)" />
                <VideoItem id="YtvdXIYn5cU" title="PTAHA FRED (Official Video)" />
                <VideoItem id="RXWgRm9fC0o" title='Live from "Mansion Countess Uvarova"' />
                <Releases releases={releases} />
                <span>Links:</span>
                <div className="links">
                    <a href="https://www.instagram.com/theunsleeping/">Instagram</a> |
                    <a href="https://www.youtube.com/channel/UCd28Lw_gmaRdJTJR6T7K1bA">YouTube</a> |
                    <a href="https://www.facebook.com/theunsleeping">Facebook</a> |
                    <a href="https://t.me/bazakabazaka">Booking</a>
                </div>
            </div>
        </div>
    )
}