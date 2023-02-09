import styles from './modal.module.css';

const Modal = (props) => {
  const onClickHandler = () => {
    props.closeModal();
  };

  return (
    <div className={styles.myModal} onClick={onClickHandler}>
      <div className={styles.msgWindow}>
        <div className={styles['header']}>Invalid input</div>
        <div className={styles['content']}>{props.message}</div>
        <button onClick={onClickHandler}>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
