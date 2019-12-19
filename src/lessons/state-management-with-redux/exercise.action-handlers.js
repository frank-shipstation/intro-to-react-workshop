export const deleteItem = (state, { itemIndex }) => {
  return {
    ...state,
    items: [
      ...state.items.slice(0, itemIndex),
      ...state.items.slice(itemIndex+1),
    ]
  }
};

/*********************************************************************
 *         Don't look below here unless you want the answer!         *
 * Try your best, but if you get stuck, you have this to reflect on! *
 *********************************************************************/











































/**
 * export const deleteItem = (state, { itemIndex }) => ({
 *   ...state,
 *   items: state.items.filter((item, index) => index !== itemIndex),
 * });
 **/
