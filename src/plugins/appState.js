import Lara from '@/presets/lara';
import Aura from '@/presets/aura';
import { reactive, watch } from 'vue';

export default {
    install: (app) => {
        const _appState = reactive({ preset: 'Aura', darkMode: false });

        watch(
            () => _appState.preset,
            (newValue) => {
            if (newValue === 'Lara')
                app.config.globalProperties.$primevue.config.pt = Lara;
            else if (newValue === 'Aura')
                app.config.globalProperties.$primevue.config.pt = Aura;
            }
        );

        app.config.globalProperties.$appState = _appState;
    }
};
