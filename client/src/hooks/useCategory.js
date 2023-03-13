import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const { data } = await axios.get("/category");
      setCategory(data);
    } catch (err) {
      console.log(err);
    }
  };

  return category;
}
