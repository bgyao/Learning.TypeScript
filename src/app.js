/**
 * Tutorial on how to add type checking to JavaScript code using JSDoc.
 * @param {number} contactId // contactId is a number. Assigning a string will trigger an error
 */
async function getContact(contactId) {
  const resp = await $.ajax({ //error will be fixed in the next video/tutorial
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id, // a number
    name: resp.name,
    birthDate: new Date(resp.birthDate), //a date object
  };
}

getContact(1).then((contact) => {
  contact.id = 1234 // assigning a string to a number will trigger an error
  contact.birthDate = new Date("12/12/1990"); // assigning a string to a date object will trigger an error
});

getContact(2).then((contact) => { // Assigning a string to contactId will trigger an error
  console.log("Contact: ", JSON.stringify(contact));
});