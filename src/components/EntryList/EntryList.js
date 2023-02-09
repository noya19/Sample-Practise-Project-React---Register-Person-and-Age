import ListItem from './ListItem';
import styles from './EntryList.module.css';

const EntryList = (props) => {
  if (props.listData.length === 0) {
    return <p className={styles['no_item']}>No Entries here</p>;
  } else {
    console.log('Reached here');
    return (
      <ul className={styles['renderedList']}>
        {props.listData.map((cur) => {
          return <ListItem key={cur.id} name={cur.name} age={cur.age} />;
        })}
      </ul>
    );
  }
};

export default EntryList;
