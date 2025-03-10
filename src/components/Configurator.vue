<template>
<div class="absolute top-[2.5rem] right-0 hidden w-[16rem] p-3 bg-white dark:bg-surface-800 rounded-md shadow border border-surface-200 dark:border-surface-700 flex-col justify-start items-start gap-3.5 inline-flex origin-top z-10">
    <div class="flex-col justify-start items-start gap-2 inline-flex w-full">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Preset</span>
        <div class="inline-flex items-start">
            <SelectButton v-model="$appState.preset" @update:modelValue="onPresetChange" :options="presets" :allowEmpty="false" />
        </div>
    </div>
    <div class="flex-col justify-start items-start gap-2 inline-flex pr-4">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Primary Colors</span>
        <div class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
            <button
                v-for="primaryColor of primaryColors"
                :key="primaryColor.name"
                type="button"
                @click="updateColors('primary', primaryColor.name)"
                class="w-4 h-4 rounded-full cursor-pointer config-button"
                :class="{ 'active-color': selectedPrimaryColor === primaryColor.name }"
                :style="{ backgroundColor: `${primaryColor.name === 'noir' ? 'var(--text-color)' : primaryColor.palette[5]}` }"
            ></button>
        </div>
    </div>
    <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
        <span class="text-black dark:text-surface-0 text-sm font-medium">Surface Colors</span>
        <div class="self-stretch justify-start items-start gap-2 inline-flex">
            <button
                v-for="surface of surfaces"
                :key="surface.name"
                type="button"
                @click="updateColors('surface', surface.name)"
                class="w-4 h-4 rounded-full cursor-pointer config-button"
                :class="{ 'active-color': selectedSurfaceColor ? selectedSurfaceColor === surface.name : $appState.darkMode ? surface.name === 'zinc' : surface.name === 'slate' }"
                :style="{ backgroundColor: `${surface.palette[6]}` }"
            ></button>
        </div>
    </div>
    <div class="flex justify-between items-center gap-2 flex w-full pt-4 pb-2 border-t border-surface-200 dark:border-surface-700">
        <span class="text-black dark:text-surface-0 text-sm font-medium m-0">Ripple Effect</span>
        <ToggleSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange" />
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                presets: ['Aura', 'Lara'],
                selectedPrimaryColor: 'noir',
                selectedSurfaceColor: 'slate',
                primaryColors: [
                    {
                        name: 'noir',
                        palette: {}
                    },
                    { name: 'emerald', palette: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'] },
                    { name: 'green', palette: ['#f0fdf4', '#dcfce7', '#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534', '#14532d', '#052e16'] },
                    { name: 'lime', palette: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05'] },
                    { name: 'orange', palette: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407'] },
                    { name: 'amber', palette: ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03'] },
                    { name: 'yellow', palette: ['#fefce8', '#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207', '#854d0e', '#713f12', '#422006'] },
                    { name: 'teal', palette: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e'] },
                    { name: 'cyan', palette: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344'] },
                    { name: 'sky', palette: ['#f0f9ff', '#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#082f49'] },
                    { name: 'blue', palette: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'] },
                    { name: 'indigo', palette: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b'] },
                    { name: 'violet', palette: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065'] },
                    { name: 'purple', palette: ['#faf5ff', '#f3e8ff', '#e9d5ff', '#d8b4fe', '#c084fc', '#a855f7', '#9333ea', '#7e22ce', '#6b21a8', '#581c87', '#3b0764'] },
                    { name: 'fuchsia', palette: ['#fdf4ff', '#fae8ff', '#f5d0fe', '#f0abfc', '#e879f9', '#d946ef', '#c026d3', '#a21caf', '#86198f', '#701a75', '#4a044e'] },
                    { name: 'pink', palette: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724'] },
                    { name: 'rose', palette: ['#fff1f2', '#ffe4e6', '#fecdd3', '#fda4af', '#fb7185', '#f43f5e', '#e11d48', '#be123c', '#9f1239', '#881337', '#4c0519'] }
                ],
                surfaces: [
                    {
                        name: 'slate',
                        palette: ['#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617']
                    },
                    {
                        name: 'gray',
                        palette: ['#ffffff', '#f9fafb', '#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#030712']
                    },
                    {
                        name: 'zinc',
                        palette: ['#ffffff', '#fafafa', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a', '#18181b', '#09090b']
                    },
                    {
                        name: 'neutral',
                        palette: ['#ffffff', '#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0a0a0a']
                    },
                    {
                        name: 'stone',
                        palette: ['#ffffff', '#fafaf9', '#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#57534e', '#44403c', '#292524', '#1c1917', '#0c0a09']
                    },
                    {
                        name: 'soho',
                        palette: ['#ffffff', '#f4f4f4', '#e8e9e9', '#d2d2d4', '#bbbcbe', '#a5a5a9', '#8e8f93', '#77787d', '#616268', '#4a4b52', '#34343d', '#1d1e27']
                    },
                    {
                        name: 'viva',
                        palette: ['#ffffff', '#f3f3f3', '#e7e7e8', '#cfd0d0', '#b7b8b9', '#9fa1a1', '#87898a', '#6e7173', '#565a5b', '#3e4244', '#262b2c', '#0e1315']
                    },
                    {
                        name: 'ocean',
                        palette: ['#ffffff', '#fbfcfc', '#F7F9F8', '#EFF3F2', '#DADEDD', '#B1B7B6', '#828787', '#5F7274', '#415B61', '#29444E', '#183240', '#0c1920']
                    }
                ]
            };
        },
        methods: {
            updateColors(type, colorName) {
                let selectedColor;
                const root = document.documentElement;

                if (type === 'primary') {
                    selectedColor = this.primaryColors.find((color) => color.name === colorName);
                    this.selectedPrimaryColor = colorName;

                    if (colorName === 'noir') {
                        root.setAttribute('data-preset', 'noir');
                    } else {
                        root.removeAttribute('data-preset');
                    }
                } else if (type === 'surface') {
                    selectedColor = this.surfaces.find((color) => color.name === colorName);
                    this.selectedSurfaceColor = colorName;
                }

                if (!document.startViewTransition) {
                    this.applyTheme(type, selectedColor.palette, colorName);

                    return;
                }

                document.startViewTransition(() => this.applyTheme(type, selectedColor.palette, colorName));
            },
            applyTheme(type, colors, colorName) {
                let increments;

                if (type === 'primary') {
                    increments = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
                } else if (type === 'surface') {
                    increments = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
                }

                if (colorName === 'noir') {
                    increments.forEach((inc, index) => {
                        document.documentElement.style.setProperty(`--p-${type}-${increments[index]}`, `var(--p-surface-${inc})`);
                    });
                } else {
                    colors.forEach((color, index) => {
                        document.documentElement.style.setProperty(`--p-${type}-${increments[index]}`, color);
                    });
                }
            },
            onPresetChange(preset) {
                this.$appState.preset = preset;
            },
            onRippleChange(value) {
                this.$primevue.config.ripple = value;
            }
        },
        computed: {
            rippleActive() {
                return this.$primevue.config.ripple;
            }
        }
    };
    </script>
    