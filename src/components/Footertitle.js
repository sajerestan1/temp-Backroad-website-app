export const FooterTitles = (props) => {
const { title} = props;

  return (
   
      <ul className='footer-links'>
        <li>
          <a href='#home' className='footer-link'>
           {title}
          </a>
        </li>
      
         </ul>
  )
}
