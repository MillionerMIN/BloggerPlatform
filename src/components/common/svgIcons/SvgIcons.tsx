type SvgIconsType = {
  icon: string;
  className?: string;
};

export function SvgIcons(props: SvgIconsType) {
  const { icon, className } = props;
  switch (icon) {
    case 'logo':
      return (
        <svg
          className={className}
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.68282 3C4.68282 2.44772 5.13054 2 5.68282 2H14.6828C15.2351 2 15.6828 2.44772 15.6828 3V9C15.6828 9.55229 15.2351 10 14.6828 10H19.6828C20.2351 10 20.6828 10.4477 20.6828 11V21C20.6828 21.5523 20.2351 22 19.6828 22H5.68282C5.13054 22 4.68282 21.5523 4.68282 21V10V3ZM8.68282 5C8.68282 4.44772 9.13054 4 9.68282 4H11.6828C12.2351 4 12.6828 4.44772 12.6828 5V7C12.6828 7.55228 12.2351 8 11.6828 8H9.68282C9.13054 8 8.68282 7.55228 8.68282 7V5ZM8.68282 14C8.68282 13.4477 9.13054 13 9.68282 13H16.6828C17.2351 13 17.6828 13.4477 17.6828 14V18C17.6828 18.5523 17.2351 19 16.6828 19H9.68282C9.13054 19 8.68282 18.5523 8.68282 18V14Z'
            fill='#1E1E1E'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.6828 3C16.6828 2.44772 17.1305 2 17.6828 2H19.6828C20.2351 2 20.6828 2.44772 20.6828 3V5C20.6828 5.55228 20.2351 6 19.6828 6H18.6828V9H16.6828V6V3ZM17.6828 4C17.6828 3.44772 18.1305 3 18.6828 3C19.2351 3 19.6828 3.44772 19.6828 4C19.6828 4.55228 19.2351 5 18.6828 5C18.1305 5 17.6828 4.55228 17.6828 4Z'
            fill='#7A7A7A'
          />
        </svg>
      );

    case 'blogs':
      return (
        <svg
          className={className}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z' />
        </svg>
      );

    case 'posts':
      return (
        <svg
          className={className}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z' />
        </svg>
      );

    default:
      return null;
  }
}
