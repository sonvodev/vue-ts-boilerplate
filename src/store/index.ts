import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { CommonState, ICommonState, CommonModule } from './common.store';

Vue.use(Vuex);

interface IRootState {
    common?: ICommonState;
}

const store: Store<IRootState> = new Vuex.Store<IRootState>({
    strict: true,

    modules: {
        common: new CommonModule<IRootState>()
    }
});


export { store as default, IRootState };
