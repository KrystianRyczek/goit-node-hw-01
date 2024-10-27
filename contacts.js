
import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';

const contactsPath = './db/contacts.json';

// TODO: udokumentuj każdą funkcję
 export async function listContacts(action) {
    try{
        const buffor = await fs.readFile(contactsPath)
        const contacts = JSON.parse(buffor)
        if(action === "list") console.log(contacts)
        return contacts
    }catch{
        console.log("reading file failed")
    }
  }
  
  export function getContactById(contactId) {
        listContacts()
            .then( (contacts) =>
                console.log(contacts.filter(contact => contact.id===contactId))
            )
  }
  
  export function removeContact(contactId) {
        listContacts()
            .then( (contacts) =>{
                const newContactList =contacts.filter(contact => contact.id!==contactId)
                const newContactListJson = JSON.stringify(newContactList)
                console.log(newContactList)
                fs.writeFile(contactsPath, newContactListJson)
            })

         
  }
  
  export function addContact(name, email, phone) {
    const newContact= {
                        "id": uuidv4(),
                        "name": name,
                        "email": email,
                        "phone": phone
                      }
        listContacts()
            .then( (contacts) =>{
                const newContactList = [...contacts, newContact]
                const newContactListJson = JSON.stringify(newContactList)
                console.log(newContactList)
                fs.writeFile(contactsPath, newContactListJson)
            })
  }

//   [
//     {
//       "id": "AeHIrLTr6JkxGE6SN-0Rw",
//       "name": "Allen Raymond",
//       "email": "nulla.ante@vestibul.co.uk",
//       "phone": "(992) 914-3792"
//     },
//     {
//       "id": "qdggE76Jtbfd9eWJHrssH",
//       "name": "Chaim Lewis",
//       "email": "dui.in@egetlacus.ca",
//       "phone": "(294) 840-6685"
//     },
//     {
//       "id": "drsAJ4SHPYqZeG-83QTVW",
//       "name": "Kennedy Lane",
//       "email": "mattis.Cras@nonenimMauris.net",
//       "phone": "(542) 451-7038"
//     },
//     {
//       "id": "vza2RIzNGIwutCVCs4mCL",
//       "name": "Wylie Pope",
//       "email": "est@utquamvel.net",
//       "phone": "(692) 802-2949"
//     },
//     {
//       "id": "05olLMgyVQdWRwgKfg5J6",
//       "name": "Cyrus Jackson",
//       "email": "nibh@semsempererat.com",
//       "phone": "(501) 472-5218"
//     },
//     {
//       "id": "1DEXoP8AuCGYc1YgoQ6hw",
//       "name": "Abbot Franks",
//       "email": "scelerisque@magnis.org",
//       "phone": "(186) 568-3720"
//     },
//     {
//       "id": "Z5sbDlS7pCzNsnAHLtDJd",
//       "name": "Reuben Henry",
//       "email": "pharetra.ut@dictum.co.uk",
//       "phone": "(715) 598-5792"
//     },
//     {
//       "id": "C9sjBfCo4UJCWjzBnOtxl",
//       "name": "Simon Morton",
//       "email": "dui.Fusce.diam@Donec.com",
//       "phone": "(233) 738-2360"
//     },
//     {
//       "id": "e6ywwRe4jcqxXfCZOj_1e",
//       "name": "Thomas Lucas",
//       "email": "nec@Nulla.com",
//       "phone": "(704) 398-7993"
//     },
//     {
//       "id": "rsKkOQUi80UsgVPCcLZZW",
//       "name": "Alec Howard",
//       "email": "Donec.elementum@scelerisquescelerisquedui.net",
//       "phone": "(748) 206-2688"
//     }
//   ]