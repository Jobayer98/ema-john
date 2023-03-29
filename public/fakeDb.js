export const addTodDb = (product) => {
  const storeProduct = [];
  const addProduct = {
    id: product.id,
    quantity: product.quantity,
  };
  // setLocalStorage("shoping-cart", JSON.stringify(addProduct));

  const getProduct = JSON.parse(getLocalStorage("shoping-cart"));
  if (getProduct) {
    storeProduct.push(getProduct);
    const existProduct = storeProduct.find((pd) => pd.id === getProduct.id);
    console.log(existProduct);
  }
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data;
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
