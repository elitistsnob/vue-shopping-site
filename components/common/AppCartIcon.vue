<template>
    <div class="cart-icon">
        <div class="cart-icon-items" v-if="items.length">{{ itemQty }}</div>
        <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.8 295.8"><circle class="" cx="131.8" cy="253.1" r="27.2"/><circle class="" cx="214.5" cy="253.1" r="27.2"/><path class="" d="M291.6 58.2c-3.6-4.5-9.1-7.1-14.8-7.1H103.2l-5.1-21.8c-1.9-8-9.1-13.7-17.3-13.7h-63C8 15.5 0 23.5 0 33.3s8 17.8 17.8 17.8h28.1l30.6 138.5c2.9 13.3 14.7 22.8 28.4 22.8h136.8c13.6 0 25.4-9.5 28.4-22.8l25.5-115.4c1-5.6-.4-11.5-4-16z"/></svg>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.cart-icon-items {
    background: #EB0C08;
    border-radius: 67%;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    padding: 5px 10px;
    position: absolute;
        right: 0;
}
</style>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
    components: {

    },
    computed: {
        ...mapGetters({
            itemQty:  'cart/itemQty',
        }),
        ...mapState({
            items: state => state.cart.items,
        }),
    }
};
</script>