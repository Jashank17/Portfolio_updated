// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Jashank N" />

            <div className='header__content'>
                <h1>Hi, I'm Jashank</h1>
                <p>EDI Analyst || Blockchain Enthusiast</p>
                <a href="mailto:enjashank@gmail.com" className='button'>Get In Touch</a>
			
		   </div>
        </section>
    );
}

export default Header;