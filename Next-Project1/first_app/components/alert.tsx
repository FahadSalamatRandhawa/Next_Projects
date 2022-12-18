import styles from '../styles/utils.module.css'
import clsx from 'clsx';

export default function Alert({ children, error }:{children?:JSX.Element[],error?:true|false|undefined}) {
    return (
      <div
        className={clsx ({
          [styles.success]: (error === false)||(error===undefined),
          [styles.error]: error === true,
        })}
      >
        {children}
        <h2>This is effect of Alert component</h2>
      </div>
    );
  }