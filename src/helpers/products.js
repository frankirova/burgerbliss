import { supabase } from "../supabase/supabase";

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
