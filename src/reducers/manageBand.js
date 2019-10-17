import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  let idx
  switch (action.type) {
    case 'ADD_BAND':
      let band = { id: uuid(),
                  name:action.name}
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
     idx = state.bands.findIndex(band => band.id === action.id)
     return {...state, bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
