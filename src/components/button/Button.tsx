import './button.scss';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export const OutlineButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default Button;
