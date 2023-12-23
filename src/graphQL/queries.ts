import { gql, useQuery } from "@apollo/client";

/** get the person defined by id */
export const GET_PERSON = gql`
  query PersonQuery($personId: ID!) {
    person(id: $personId) {
      id
      birthYear
      eyeColor
      films {
        title
      }
      homeworld {
        name
      }
      mass
      image
      gender
      hairColor
      height
      name
      skinColor
      species {
        language
        name
      }
      starships {
        image
        manufacturer
        model
        name
        pilots {
          name
        }
      }
      vehicles {
        manufacturer
        name
        model
        pilots {
          name
        }
      }
    }
  }
`;

/** get all characters */
export const GET_PEOPLE = gql`
  query allPeople {
    allPeople {
      id
      name
      image
      gender
      species {
        id
        name
      }
    }
  }
`;
