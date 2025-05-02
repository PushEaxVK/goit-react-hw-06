import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleQuery = (query) => {
    dispatch(changeFilter(query));
  };

  const queryId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={queryId}>Find contacts by name</label>
      <input
        type="text"
        name="query"
        value={filter}
        onChange={(evt) => handleQuery(evt.target.value)}
        id={queryId}
      />
    </div>
  );
};
export default SearchBox;
