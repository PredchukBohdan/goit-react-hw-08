import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { FadeLoader } from "react-spinners";

const loaderStyles = {
  display: "block",
  margin: "0 auto",
  marginTop: "30px",
};

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && (
        <FadeLoader
          color="#4d02b9"
          loading={isLoading}
          className="loader"
          cssOverride={loaderStyles}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!isLoading && !error && filteredContacts.length > 0 && (
        <ul className={s.contactsList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
      {error && !isLoading && <p className={s.error}>{error}</p>}
    </>
  );
};
