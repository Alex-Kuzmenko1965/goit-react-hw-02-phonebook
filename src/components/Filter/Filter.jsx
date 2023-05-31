// import cl from './Section.module.css';

export const Filter = ({ filter, filteredContacts, getContactsBySearchQuery}) => {
  return (
    <label>
      Find contacts by name   
      <input
      type="text"
      name="search"          
      value={filter}
      onChange={getContactsBySearchQuery}          
      />
    </label>
  );
};