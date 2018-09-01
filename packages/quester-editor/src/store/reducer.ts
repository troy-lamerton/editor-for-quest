import * as a from './actions';

export const initState = {
  steps: null,
};

export default function(state = initState, action: any) {
  if (!action || !action.type) {
    return state;
  }
  //tslint:disable
  console.log('act', action);
  switch (action.type) {
    case a.OPEN_FOR_EDIT:
      return {
        ...state,
        steps: action.steps,
      };
  }
  return state;
}
