import { title } from "process";
import { admin } from "../entities/admin.entity.js";
import { books } from "../entities/book.entity.js";

async function createAdmin(addAdmin) {
  return await admin.create(addAdmin).go();
}
async function getAdminbyAdminname(Adminname) {
  return await admin.get({ Adminname: Adminname }).go();
}

async function editbooksById(existingData, updatedata) {
  return await books
    .put({
      ...existingData.data,
      ...updatedata,
    })
    .go();
}

async function deletebookById(id) {
  return await books.delete({ bookId: id }).go();
}

async function getbookById(id) {
  return await books.get({ bookId: id }).go();
}

// async function deletebookById(id) {
//   return await books.delete({ title: id }).go();
// }

// async function getbookById(id) {
//   return await books.get({ title: id }).go();
// }

export {
  createAdmin,
  getAdminbyAdminname,
  getbookById,
  deletebookById,
  editbooksById,
};
// prblm approach (how features design) demo prbm sol
