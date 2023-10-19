import { gql, useQuery } from '@apollo/client';

const GET_WARSHIPS = gql`
  query getWarships {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;
const WarshipsList = () => {
  const { loading, error, data } = useQuery(GET_WARSHIPS);
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка : {error.message}</p>;
  console.log(data);

  return <div></div>;
};

export default WarshipsList;
