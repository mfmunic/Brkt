import * as actionTypes from './actionTypes';

export function fetchPublishers() {
  return {
    type: actionTypes.FETCH_PUBLISHERS,
    payload: fetch('https://routedb.zeeto.io/publisher')
      .then(promise => promise.json())
      .then(data => data)
  };
}

export function changePublisherRoute(data, toAddId) {
  console.log('=============', data);
  const retData = data.publisherRoutes.map(route => {
    if (route._id === toAddId) {
      route.form = true;
    }
    return route;
  });
  return {
    type: actionTypes.CHANGE_PUBLISHER_ROUTE,
    payload: retData
  };
}

export function addNewVariation(addNewForm) {
  return {
    type: actionTypes.ADD_NEW_VARIATION,
    payload: addNewForm
  };
}

export function variationChange(updateVariationForm) {
  return {
    type: actionTypes.UPDATE_VARIATION_FORM,
    payload: updateVariationForm
  };
}
export function createRouteForm(updateRouteForm) {
  return {
    type: actionTypes.UPDATE_ROUTE_VARIATION_FORM,
    payload: updateRouteForm
  };
}

export function addPublisherDataToRoute(publisherData) {
  return {
    type: actionTypes.UPDATE_ROUTE_FORM,
    payload: publisherData
  };
}
export function addRouteVariationForm(updateRouteForm) {
  updateRouteForm = updateRouteForm.concat([
    {
      destinationSubdomain: '',
      experimentId: '',
      pid: '',
      staticUrl: '',
      variationId: '',
      vid: '',
      variationPath: ''
    }
  ]);
  return {
    type: actionTypes.UPDATE_ROUTE_VARIATION_FORM,
    payload: updateRouteForm
  };
}

export function fetchPublisherRoutes(publisherId) {
  return {
    type: actionTypes.FETCH_PUBLISHER_ROUTES,
    payload: fetch(`https://routedb.zeeto.io/route/${publisherId}`)
      .then(promise => promise.json())
      .then(data => {
        console.log('get routes ', data);
        return data;
      })
  };
}

export function resetPublisherOne() {
  return {
    type: actionTypes.RESET_PUBLISHER_ONE,
    payload: 'null'
  };
}

export function postPublisherRoutes(routeInfo) {
  let params = {
    method: 'POST',
    body: JSON.stringify(routeInfo)
  };
  return {
    type: actionTypes.POST_PUBLISHER_ROUTE,
    payload: fetch(`https://routedb.zeeto.io/route`, params)
      .then(res => res.json())
      .then(data => {
        // fetchPublisherRoutes(routeInfo.publisherId);
        // console.log('post new route ', routeInfo);
        return data;
      })
  };
}
