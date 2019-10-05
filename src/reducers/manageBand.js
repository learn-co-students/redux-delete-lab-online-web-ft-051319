import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      const newBand = {
        id: uuid(),
        name: action.payload
      };

      console.log("ADD_BAND state: ", state.bands.concat(newBand));

      return { bands: state.bands.concat(newBand) }

    case 'DELETE_BAND':
      
      return { bands: state.bands.filter(band => band.id !== action.id) }

    default:
      return state;
  }
};
