import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: '@comnsense',
    href: 'https://mirelse.github.io',
  },
  {
    social: 'email',
    link: 'ahwakk@icloud.com',
    href: 'mailto:ahwakk@icloud.com',
  },
  {
    social: 'github',
    link: 'mirelse',
    href: 'https://github.com/mirelse',
  },
  {
    social: 'linkedin',
    link: 'Mirela Yosifova',
    href: 'https://www.linkedin.com/in/mirelsewhere/',
  },
  {
    social: 'twitter',
    link: 'ahhwakk',
    href: 'https://www.twitter.com/ahhwakk',
  },
  {
    social: 'instagram',
    link: 'comnsense',
    href: 'https://www.instagram.com/comnsense',
  },
 
  {
    social: 'telegram',
    link: 'ahhwak',
    href: 'https://t.me/ahhwak',
  },
  {
    social: 'codepen',
    link: 'mirelse',
    href: 'https://codepen.io/mirelse',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
