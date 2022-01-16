import styles from './FilterList.module.css';
import PropTypes from 'prop-types';
import { getFilter } from "../../redux/contacts/PhonebookSelector";
import { useSelector, useDispatch} from 'react-redux';
import { changeFilter } from "../../redux/contacts/PhonebookSlicer";


function FilterList () {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

    return (
      <label className={styles.label}>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} name="filter" />
    </label>
    )
}
  
  export default FilterList;