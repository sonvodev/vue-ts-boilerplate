import Vuex, { Module, GetterTree, ActionTree, MutationTree } from 'vuex';

export interface ICommonState {
    language: string;
    isLoading: boolean;
    initialized: boolean;

}
export class CommonState {
    language: string;
    isLoading: boolean;
    initialized: boolean;

    constructor() {
        this.isLoading = false;
        let lang = localStorage.getItem('lang');
        if (lang === null || lang === undefined) {
            lang = 'en-US';
            localStorage.setItem('lang', lang);
            this.language = lang;
        }
    }
}
export class CommonModule<RootState> implements Module<ICommonState, RootState> {
    namespaced: boolean = true;

    state: ICommonState = new CommonState();

    getters: GetterTree<ICommonState, RootState> = {
        language(state: ICommonState): string {
            return state.language;
        }
    };

    actions: ActionTree<ICommonState, RootState> = {

        changeLanguage: ({ commit }, langCode: string): void => {
            localStorage.setItem('lang', langCode);
            commit('setLanguage', langCode);
        }
    };

    mutations: MutationTree<ICommonState> = {

        setLanguage: (state: ICommonState, langCode: string) => {
            state.language = langCode;
        }

    };
}
