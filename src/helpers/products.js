import Papa from "papaparse";

export const product = {
  list: async () => {
    const URL_DB = import.meta.env.VITE_URL;
    try {
      const response = await fetch(URL_DB);

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }

      const text = await response.text();

      return new Promise((resolve, reject) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => reject(error.message),
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
