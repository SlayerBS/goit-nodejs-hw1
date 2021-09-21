const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
const readContacts = async () => {
  const result = await fs.readFile(path.join(__dirname, "contacts.json"));
};
// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, getContactById, removeContact, addContact };
