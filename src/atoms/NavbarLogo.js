import London from '../assets/pfwLogo.jpeg';

function Logo() {
  return (
    <div>
      <a className='navbar-brand' href='/'>
        <img src={London} width='30' height='30' alt='' loading='lazy' />
      </a>
    </div>
  );
}

export default Logo;
