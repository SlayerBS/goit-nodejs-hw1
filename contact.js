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

async function removeContact(contactId) {
  const contacts = await readContacts();
  let index = -1;
  contacts.forEach((contact, idx) => {if (contact.id===contact)
  index = idx;})
  if (index>-1){
    contacts.splice(idx, 1);
  }
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );

return index;
 
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  console.log(contacts);
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
