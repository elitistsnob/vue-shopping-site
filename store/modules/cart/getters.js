export default {
    cartItems: state => state.items,
    getCartTotal: state => state.items.reduce((total, item) => total + item.price * item.itemQty, 0),
    getQty: state => state.items.length,
    itemQty: state => state.items.reduce((current, next) => current + next.itemQty, 0),
    getItemQty: state => state.items.map(item => {
        if (item.itemid) {
            // element.qty += 1;
            return item.itemQty;
        }
    }),
    getInventory: state => state.items.map(item => {
        if (item.itemid === item.itemid) {
            // element.qty += 1;
            return item.inventory;
        }
    }),
    inCart: state => state.items,
};