import { useParams } from 'react-router-dom';

export default function Movie() {
  const { id } = useParams();
  return (
    <main>{id}</main>
  );
}