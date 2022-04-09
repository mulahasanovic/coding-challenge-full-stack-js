import useAxios from 'axios-hooks';

const API = "http://localhost:3001/api";

export default function useSearch(tags) {

  const [{ data, loading, error }] = useAxios({
    method: 'get',
    url: `${API}/search`,
    params: {
      tags: tags,
    }
  });

  return {
    data,
    loading,
    error
  }
};