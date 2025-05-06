import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <div className={s.itemInfo}>
        <div className={s.itemName}>
          <IoPerson />
          <span>{contact.name}</span>
        </div>
        <div className={s.itemPhone}>
          <FaPhone />
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={s.itemDelete}
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
