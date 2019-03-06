import {FETCH_PRODUCTS_BEGIN , FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE} from "../Services/typeUser";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload:  products 
    }
}


 export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload:  error 
});

export const fetchProducts = () => {
    
  return dispatch => {
      
    dispatch(fetchProductsBegin());
    fetch("https://www.googleapis.com/books/v1/volumes?q=movie")
      .then(r => {
          return r.json();
      })
      .then(data => {

        dispatch(fetchProductsSuccess(data.items));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

