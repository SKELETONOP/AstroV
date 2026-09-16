import AppLink from './AppLink';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary: 'bg-accent-600 text-neutral-50 hover:bg-accent-700 active:bg-accent-800',
  secondary:
    'bg-transparent text-accent-600 border border-accent-500 hover:bg-accent-50 hover:text-accent-700 active:bg-accent-100',
  ghost: 'bg-transparent text-accent-600 hover:bg-accent-50 hover:text-accent-700 active:bg-accent-100',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3.5 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', className = '', children, href, ...rest }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href !== undefined) {
    return (
      <AppLink href={href} className={classes} {...rest}>
        {children}
      </AppLink>
    );
  }

  const { type = 'button', ...buttonRest } = rest;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
