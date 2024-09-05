export default {
  root: ({ props, state }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",
        // Shape
        "rounded-md",
        // Color and Background
        "bg-surface-0 dark:bg-surface-900",
        "border",
        { "border-surface-300 dark:border-surface-600": !props.invalid },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid },
        // Transitions
        "transition-all",
        "duration-200",
        // States
        { "hover:border-primary": !props.invalid },
        { "outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50": state.focused },
        // Misc
        "cursor-pointer",
        "select-none",
        { "opacity-60": props.disabled, "pointer-events-none": props.disabled, "cursor-default": props.disabled }
      ]
    }),
  labelContainer: "overflow-hidden flex flex-auto cursor-pointer",
  label: ({ props }) => {
      var _a, _b, _c, _d;
      return {
        class: [
          "leading-[normal]",
          "block ",
          // Spacing
          {
            "p-3": props.display !== "chip",
            "py-3 px-3": props.display === "chip" && !((_a = props == null ? void 0 : props.modelValue) != null && _a.length),
            "py-[0.375rem] px-3": props.display === "chip" && ((_b = props == null ? void 0 : props.modelValue) == null ? void 0 : _b.length) > 0
          },
          // Color
          { "text-surface-800 dark:text-white/80": (_c = props.modelValue) == null ? void 0 : _c.length, "text-surface-400 dark:text-surface-500": !((_d = props.modelValue) != null && _d.length) },
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          // Transitions
          "transition duration-200",
          // Misc
          "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
        ]
      };
    },
  dropdown: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
  },
  overlay: {
    class: ["border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
  },
  header: {
    class: ["flex items-center justify-between", "py-3 px-5 gap-2", "m-0", "border-b", "rounded-tl-md", "rounded-tr-md", "text-surface-700 dark:text-white/80", "bg-surface-100 dark:bg-surface-800", "border-surface-300 dark:border-surface-700", "[&_[data-pc-name=pcfiltercontainer]]:!flex-auto", "[&_[data-pc-name=pcfilter]]:w-full"]
  },
  listContainer: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  list: {
    class: "py-3 list-none m-0"
  },
  option: ({ context }) => ({
      class: [
        // Font
        "font-normal",
        "leading-none",
        // Flexbox
        "flex items-center",
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-3 px-5 gap-2",
        // Color
        { "text-surface-700 dark:text-white/80": !context.focused && !context.selected },
        { "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80": context.focused && !context.selected },
        { "bg-highlight": context.selected },
        //States
        { "hover:bg-surface-100 dark:hover:bg-surface-600/80": !context.focused && !context.selected },
        { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80": context.focused && !context.selected },
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    }),
  optionGroup: {
    class: ["font-bold", "m-0", "p-3 px-5", "text-surface-800 dark:text-white/80", "bg-surface-0 dark:bg-surface-600/80", "cursor-auto"]
  },
  emptyMessage: {
    class: ["leading-none", "py-3 px-5", "text-surface-800 dark:text-white/80", "bg-transparent"]
  },
  loadingIcon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}