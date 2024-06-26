export default interface serie {
  id: number;
  backdrop_path: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  genres: genre[];
  number_of_seasons: number;
}
interface genre {
  id: number;
  name: string;
}
