export default {
  root: ({ props }) => ({
      class: [
        "relative",
        { "flex [&>input]:w-full": props.fluid, "inline-flex": !props.fluid },
        {
          "opacity-60 select-none pointer-events-none cursor-default": props.disabled
        },
        { "[&>input]:pr-10": props.toggleMask }
      ]
    }),
  overlay: {
    class: ["p-5", "border-0 dark:border", "shadow-md rounded-md", "bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-white/80", "dark:border-surface-700"]
  },
  meter: {
    class: ["overflow-hidden", "relative", "border-0", "h-3", "mb-2", "bg-surface-100 dark:bg-surface-700"]
  },
  meterLabel: ({ instance }) => {
      var _a, _b, _c;
      return {
        class: [
          // Size
          "h-full",
          // Colors
          {
            "bg-red-500 dark:bg-red-400/50": ((_a = instance == null ? void 0 : instance.meter) == null ? void 0 : _a.strength) == "weak",
            "bg-orange-500 dark:bg-orange-400/50": ((_b = instance == null ? void 0 : instance.meter) == null ? void 0 : _b.strength) == "medium",
            "bg-green-500 dark:bg-green-400/50": ((_c = instance == null ? void 0 : instance.meter) == null ? void 0 : _c.strength) == "strong"
          },
          // Transitions
          "transition-all duration-1000 ease-in-out"
        ]
      };
    },
  maskIcon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  unmaskIcon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}