import classNames from 'classnames';
import { string } from 'prop-types';

export function Button({ className, label, children, ...restProps }) {
  return (
    <button
      className={classNames('button', className)}
      aria-label={label}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: string,
  label: string,
};
