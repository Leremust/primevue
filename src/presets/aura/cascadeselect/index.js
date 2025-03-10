export default {
  root: ({ props, state }) => ({
      class: [
        "relative",
        // Flex
        {
          flex: props.fluid,
          "inline-flex": !props.fluid
        },
        // Shape
        "rounded-md",
        // Color and Background
        { "bg-surface-0 dark:bg-surface-950": !props.disabled },
        "border",
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
        { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400": state.focused },
        // Misc
        "cursor-pointer",
        "select-none",
        { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": props.disabled }
      ]
    }),
  label: ({ props }) => ({
      class: [
        // Font
        "leading-none",
        // Flex & Alignment
        "flex flex-auto",
        // Sizing and Spacing
        "w-[1%]",
        "py-2 px-3",
        //Shape
        "rounded-none",
        // Color and Background
        "bg-transparent",
        "border-0",
        { "text-surface-800 dark:text-white/80": props.modelValue, "text-surface-400 dark:text-surface-500": !props.modelValue },
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    }),
  dropdown: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-r-md"]
  },
  overlay: {
    class: ["bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-white/80", "border border-surface-300 dark:border-surface-700", "rounded-md", "shadow-md"]
  },
  list: {
    class: "flex flex-col list-none p-0 m-0 gap-[2px] min-w-full"
  },
  option: ({ context }) => ({
      class: [
        //Shape
        "rounded-[4px]",
        // Spacing
        "first:mt-0 mt-[2px]",
        // Colors
        {
          "text-surface-500 dark:text-white/70": !context.focused && !context.active,
          "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": context.focused && !context.active,
          "bg-highlight": context.focused && context.active || context.active || !context.focused && context.active
        },
        // Transitions
        "transition-shadow",
        "duration-200",
        // States
        {
          "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !context.active,
          "hover:bg-highlight-emphasis": context.active
        },
        // Disabled
        { "opacity-60 pointer-events-none cursor-default": context.disabled }
      ]
    }),
  optionContent: {
    class: ["relative", "leading-[normal]", "flex", "items-center", "py-2", "px-3", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  groupIcon: {
    class: ["ml-auto"]
  },
  optionList: {
    class: ["min-w-full", "p-1", "m-0", "list-none", "shadow-none sm:shadow-md", "rounded-md", "border border-surface-200 dark:border-surface-700", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-900"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}