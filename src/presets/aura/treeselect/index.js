export default {
  root: ({ props, state }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",
        // Shape
        "rounded-md",
        // Color and Background
        { "bg-surface-0 dark:bg-surface-950": !props.disabled },
        "border",
        { "border-surface-300 dark:border-surface-700": !props.invalid },
        // Invalid State
        "invalid:focus:ring-red-200",
        "invalid:hover:border-red-500",
        { "border-red-500 dark:border-red-400": props.invalid },
        // Transitions
        "transition-all",
        "duration-200",
        // States
        { "hover:border-surface-400 dark:hover:border-surface-600": !props.invalid },
        { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10": state.focused },
        // Misc
        "cursor-pointer",
        "select-none",
        { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": props.disabled }
      ]
    }),
  labelContainer: {
    class: ["overflow-hidden flex flex-auto cursor-pointer"]
  },
  label: {
    class: ["block leading-[normal]", "py-2 px-3", "text-surface-800 dark:text-white/80", "transition duration-200", "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"]
  },
  dropdown: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-r-md"]
  },
  panel: {
    class: ["bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-white/80", "border border-surface-300 dark:border-surface-700", "rounded-md", "shadow-md"]
  },
  treeContainer: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}