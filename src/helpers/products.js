import Papa from "papaparse";
import { supabase } from "../supabase/supabase";
// export const product = {
//   list: async () => {
//     const URL_DB = import.meta.env.VITE_URL;
//     try {
//       const response = await fetch(URL_DB);

//       if (!response.ok) {
//         throw new Error("La solicitud no fue exitosa");
//       }

//       const text = await response.text();

//       return new Promise((resolve, reject) => {
//         Papa.parse(text, {
//           header: true,
//           complete: (results) => resolve(results.data),
//           error: (error) => reject(error.message),
//         });
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   },
// };

const selectProducts = async () => {
  try {
    const response = await supabase.from("products").select();
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};

export const product = {
  list: async () => {
    return await selectProducts();
  },
};
