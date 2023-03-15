import  ContactForm from "components/ContactForm/ContactForm"
import  ContactList from "components/ContactList/ContactList"
import  FilterForm from "components/FilterForm/FilterForm"

const ContactsPage = () => {
    return (
        <>
            <ContactForm />
            <FilterForm />
            <ContactList />
        </>
    )
}

export default ContactsPage;