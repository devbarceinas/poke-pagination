import { useState, useEffect } from "react";
import { fetchAllPokemons } from "../helpers/fetchAllPokemons";

const usePokemon = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPokemons();
  }, [])

  return {
    loading,
  }
}

export { usePokemon };