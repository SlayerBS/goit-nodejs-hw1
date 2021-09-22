const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
const readContacts = async () => {
  const result = await fs.readFile(
    path.join(__dirname, "contacts.json"),
    "utf-8"
  );
  const contacts = JSON.parse(result);
  return contacts;
};
// TODO: задокументировать каждую функцию
function listContacts() {
  return readContacts();
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  const [result] = contacts.filter((contact) => contact.id === contactId);
  return result;
}

async function removeContact(contact) {
  const contacts = await readContacts();
  contacts.forEach((contact, idx) => {if (contact.id===contact)});

  //     const { items } = this;
  //     for (let i = 0; i < items.length; i += 1) {
  //       const { name } = items[i];

  //       if (productName === name) {
  //         console.log('Нашли такой продукт', productName);
  //         console.log('index', i);
  //         items.splice(i, 1);
  //       }
  //     }
  //   },
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
