// import cl from './ContactList.module.css';

export const ContactList = ({contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
      <li key = {id}>{name}: {number}
      <button type = "button" onClick = {() => deleteContact(id)}>Delete</button>
      </li>))}        
    </ul>
  );
} 