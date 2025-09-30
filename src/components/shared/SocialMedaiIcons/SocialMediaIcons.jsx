import SocialIcon from "./SocialIcon/SocialIcon";

const SocialMedaiIcons = (props) => {
    return (
        <div>
            <SocialIcon link="https://www.linkedin.com/in/shereef-hamed/">
                <i className="fa-brands fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon link="https://wa.me/201008701804">
                <i className="fa-brands fa-whatsapp"></i>
            </SocialIcon>
            <SocialIcon link="https://www.upwork.com/freelancers/~01eeef25c77546268f?viewMode=1">
                <i className="fa-brands fa-upwork"></i>
            </SocialIcon>
        </div>
    )
}

export default SocialMedaiIcons;