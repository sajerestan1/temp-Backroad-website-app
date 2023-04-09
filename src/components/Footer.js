import { pageLinks, socialLinks } from '../data';
export const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-icons'>
        {pageLinks.map((link) => {
          const { href, text, id } = link;
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul class='footer-links'>
        {socialLinks.map((links) => {
          const { id, href, icon } = links;
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='footer-link'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
