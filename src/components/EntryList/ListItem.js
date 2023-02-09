import styles from './ListItem.module.css';

const ListItem = (props) => {
  return (
    <div className={styles['items']}>
      <div>{props.name}</div>
      <div>{`( ${props.age} years old)`}</div>
    </div>
  );
};

export default ListItem;
