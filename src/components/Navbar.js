import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- HTML comments will trhrow error--> */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })}

          {/* <li>
            <a href='#about' className='nav-link'>
              {' '}
              about{' '}
            </a>
          </li>

          <li>
            <a href='#services' className='nav-link'>
              {' '}
              services{' '}
            </a>
          </li>

          <li>
            <a href='#tours' className='nav-link'>
              {' '}
              tours
            </a>
          </li> */}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((links)=>{
            const {id, href, icon} = links;
            return (
              <li key={id}>
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                   className='nav-icon'
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
