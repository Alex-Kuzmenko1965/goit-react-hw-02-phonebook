// import cl from './Section.module.css';

export const Section = ({title, children}) => {
  return (
    <>    
    <h1>{title}</h1>{children}
    </>
  );
};