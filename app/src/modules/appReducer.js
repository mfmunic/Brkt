import * as actionTypes from './actionTypes';

const initialState = {
  publishers: [],
  publisherRoutes: [],
  variations: [],
  createRouteForm: {
    publisherId: '',
    publisherName: '',
    publisherDescription: '',
    zrid: '',
    active: true,
    acceptedDomains: [],
    escapes: [],
    routeDescription: '',
    checked: [],
    variations: [
      {
        destinationSubdomain: '',
        experimentId: '',
        pid: '',
        staticUrl: '',
        variationId: '',
        vid: '',
        variationPath: ''
      }
    ]
  },
  variationForm: {
    destinationSubdomain: '',
    experimentId: '',
    pid: '',
    staticUrl: '',
    variationId: '',
    vid: '',
    variationPath: '',
    deviceCategory: [
      { type: 'desktop', checked: false },
      { type: 'tablet', checked: false },
      { type: 'mobile', checked: false },
      { type: 'fallback', checked: false }
    ]
  }
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case `${actionTypes.FETCH_PUBLISHERS}_FULFILLED`:
      return {
        ...state,
        publishers: action.payload
      };

    case `${actionTypes.FETCH_PUBLISHER_ROUTES}_FULFILLED`:
      return {
        ...state,
        publisherRoutes: action.payload
      };

    case `${actionTypes.CHANGE_PUBLISHER_ROUTE}_FULFILLED`:
      return {
        ...state,
        publisherRoutes: action.payload
      };

    case actionTypes.ADD_NEW_VARIATION:
      return {
        ...state,
        variations: action.payload
      };

    case actionTypes.UPDATE_VARIATION_FORM:
      return {
        ...state,
        variationForm: action.payload
      };

    // case actionTypes.UPDATE_ROUTE_VARIATION_FORM:
    //   return {
    //     ...state,
    //     createRouteForm: action.payload
    //   };

    case actionTypes.UPDATE_ROUTE_VARIATION_FORM:
      return {
        ...state,
        createRouteForm: {
          ...state.createRouteForm,
          variations: action.payload
        }
      };

    case actionTypes.UPDATE_ROUTE_FORM:
      return {
        ...state,
        createRouteForm: action.payload
      };

    case actionTypes.RESET_PUBLISHER_ONE:
      console.log('pub one !!!!!!', action.payload);
      return {
        ...state,
        publisherRouteOne: action.payload
      };

    case `${actionTypes.POST_PUBLISHER_ROUTE}_FULFILLED`:
      console.log('payload =======', action.payload);
      return {
        ...state,
        publisherRouteOne: action.payload
      };

    default:
      return state;
  }
}
