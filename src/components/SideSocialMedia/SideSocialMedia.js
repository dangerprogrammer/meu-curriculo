import SocialMediaItem from "../SocialMediaItem/SocialMediaItem";

function SideSocialMedia({socialMedias}) {
    return <div id="side-social-media" className="fixed right-0 bottom-0 flex px-[1rem] py-[1.5rem] z-[100]">
        <ul className="flex flex-col-reverse gap-[.5rem]">
            {socialMedias && socialMedias.map(({icon, mediaName}, ind) => <SocialMediaItem key={ind} name={mediaName} icon={icon}/>)}
        </ul>
    </div>
};

export default SideSocialMedia;