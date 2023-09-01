import {createStore} from 'vuex'
import iconModule from "./modules/icon";


const state = {};

export default createStore({

    state,
    modules: {
        iconModule
    }
});