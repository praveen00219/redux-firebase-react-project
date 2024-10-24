// import { fetchTotalContacts } from "./contactSlice";

// export const addContact = (userdata) => {
//   return (dispatch) =>
//     fetch(
//       "https://contact-list-app-ae749-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userdata),
//       }
//     )
//       .then(() => {
//         dispatch(fetchTotalContacts()); // Dispatch after successful POST
//       })
//       .catch((error) => {
//         console.error(error);
//       });
// };
