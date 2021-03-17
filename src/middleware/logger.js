const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
  const result = next(action); // this will call dispatch since logger is the last middleware action. This is exactly like dispatch(action)
  console.log("The new state: ", store.getState());
  console.groupEnd();

  return result;
};

export default logger;
