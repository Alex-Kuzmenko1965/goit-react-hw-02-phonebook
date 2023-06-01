// import cl from './Section.module.css';

export const Filter = ({ filter, searchQuery}) => {
  return (
    <label>
      Find contacts by name   
      <input
      type="text"
      name="search"          
      value={filter}
      onChange={searchQuery}          
      />
      {(!filter) ? (<p>No matches found</p>) : (<></>)}
    </label>
  );
};