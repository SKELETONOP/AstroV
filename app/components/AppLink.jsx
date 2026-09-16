import { Link } from 'react-router';

function isInternal(href) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function AppLink({ href, ...rest }) {
  if (isInternal(href)) {
    return <Link to={href} {...rest} />;
  }
  return <a href={href} {...rest} />;
}
