export default {
  root: ({ props, state, parent }) => ({
      class: [
        // Display and Position
        "inline-flex",
        "relative",
        // Shape
        { "rounded-md": parent.instance.$name !== "InputGroup" },
        { "first:rounded-l-md rounded-none last:rounded-r-md": parent.instance.$name == "InputGroup" },
        { "border-0 border-y border-l last:border-r": parent.instance.$name == "InputGroup" },
        { "first:ml-0 ml-[-1px]": parent.instance.$name == "InputGroup" && !props.showButtons },
        // Color and Background
        { "bg-surface-0 dark:bg-surface-950": !props.disabled },
        "border",
        { "dark:border-surface-700": parent.instance.$name != "InputGroup" },
        { "dark:border-surface-600": parent.instance.$name == "InputGroup" },
        { "border-surface-300 dark:border-surface-600": !props.invalid },
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
  label: ({ props, parent }) => {
      var _a;
      return {
        class: [
          //Font
          "leading-[normal]",
          // Display
          "block",
          "flex-auto",
          // Color and Background
          "bg-transparent",
          "border-0",
          { "text-surface-800 dark:text-white/80": props.modelValue != null, "text-surface-400 dark:text-surface-500": props.modelValue == null },
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          // Sizing and Spacing
          "w-[1%]",
          "py-2 px-3",
          { "pr-7": props.showClear },
          //Shape
          "rounded-none",
          // Transitions
          "transition",
          "duration-200",
          // States
          "focus:outline-none focus:shadow-none",
          // Filled State *for FloatLabel
          { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == "FloatLabel" && props.modelValue !== null },
          // Misc
          "relative",
          "cursor-pointer",
          "overflow-hidden overflow-ellipsis",
          "whitespace-nowrap",
          "appearance-none"
        ]
      };
    },
  dropdown: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-r-md"]
  },
  overlay: {
    class: ["bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-white/80", "border border-surface-300 dark:border-surface-700", "rounded-md", "shadow-md"]
  },
  listContainer: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context }) => ({
      class: [
        "relative",
        "flex items-center",
        // Font
        "leading-none",
        // Spacing
        "m-0 px-3 py-2",
        "first:mt-0 mt-[2px]",
        // Shape
        "border-0 rounded",
        // Colors
        {
          "text-surface-700 dark:text-white/80": !context.focused && !context.selected,
          "bg-surface-200 dark:bg-surface-600/60": context.focused && !context.selected,
          "text-surface-700 dark:text-white/80": context.focused && !context.selected,
          "bg-highlight": context.selected
        },
        //States
        { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !context.focused && !context.selected },
        { "hover:bg-highlight-emphasis": context.selected },
        { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": context.focused && !context.selected },
        // Transition
        "transition-shadow duration-200",
        // Misc
        "cursor-pointer overflow-hidden whitespace-nowrap"
      ]
    }),
  optionGroup: {
    class: ["font-semibold", "m-0 py-2 px-3", "text-surface-400 dark:text-surface-500", "cursor-auto"]
  },
  optionCheckIcon: "relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",
  optionBlankIcon: "w-4 h-4",
  emptyMessage: {
    class: ["leading-none", "py-2 px-3", "text-surface-800 dark:text-white/80", "bg-transparent"]
  },
  header: {
    class: ["pt-2 px-2 pb-0", "m-0", "border-b-0", "rounded-tl-md", "rounded-tr-md", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "border-surface-300 dark:border-surface-700"]
  },
  clearIcon: {
    class: ["text-surface-400 dark:text-surface-500", "absolute", "top-1/2", "right-12", "-mt-2"]
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