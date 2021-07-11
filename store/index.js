export const state = () => ({
    frontTemplate: "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-front",
    backTemplate: "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-back",
    frontDesign: "nuxtjs-tshirt-design-visualizer/uploads/defaults/default-front",
    backDesign: "nuxtjs-tshirt-design-visualizer/uploads/defaults/default-back",
});

export const getters = {
    frontTemplate: state => state.frontTemplate,
    backTemplate: state => state.backTemplate,
    frontDesign: state => state.frontDesign,
    backDesign: state => state.backDesign,
};

export const mutations = {
    updateFrontDesign(state, public_id) {
        state.frontDesign = public_id;
        return state.frontDesign;
    },
    updateBackDesign(state, public_id) {
        state.backDesign = public_id;
        return state.backDesign;
    }
}

export const actions = {
    updateFrontDesign({ commit }, public_id) {
        return commit('updateFrontDesign', public_id);
    },
    updateBackDesign({ commit }, public_id) {
        return commit('updateBackDesign', public_id);
    }
}