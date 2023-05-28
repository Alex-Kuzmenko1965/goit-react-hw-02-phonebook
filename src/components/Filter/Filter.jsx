// import cl from './Section.module.css';

export const Filter = ({ searchQuery, getContactsBySearchQuery}) => {
  return (
    <label>
        Find contacts by name   
        <input
        type="text"
        name="search"          
        value={searchQuery}
        onChange={getContactsBySearchQuery}          
        />
      </label>
  );
};