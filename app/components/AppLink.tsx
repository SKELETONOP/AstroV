import { Link, type LinkProps } from 'react-router';
import type { AnchorHTMLAttributes } from 'react';

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function isInternal(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export default function AppLink({ href, ...rest }: AppLinkProps) {
  if (isInternal(href)) {
    return <Link to={href} {...(rest as Omit<LinkProps, 'to'>)} />;
  }
  return <a href={href} {...rest} />;
}
