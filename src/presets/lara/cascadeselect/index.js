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
  label: ({ props }) => ({
      class: [
        //Font
        "leading-[normal]",
        // Flex & Alignment
        " flex flex-auto",
        // Sizing and Spacing
        "w-[1%]",
        "p-3",
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
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-tr-md", "rounded-br-md"]
  },
  overlay: {
    class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "bg-surface-0 dark:bg-surface-700", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
  },
  list: {
    class: "flex flex-col list-none p-0 m-0 gap-[2px] min-w-full"
  },
  option: ({ context }) => ({
      class: [
        // Font
        "font-normal",
        "leading-none",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        //  Colors
        {
          "text-surface-500 dark:text-white/70": !context.focused && !context.active,
          "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": context.focused && !context.active,
          "bg-highlight": context.focused && context.active || context.active || !context.focused && context.active
        },
        // Hover States
        {
          "hover:bg-surface-100 dark:hover:bg-surface-600/80": !context.active,
          "hover:bg-highlight-emphasis": context.active
        },
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    }),
  optionContent: {
    class: ["relative", "flex", "items-center", "py-3", "px-5", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  groupIcon: {
    class: ["ml-auto"]
  },
  optionList: {
    class: ["min-w-full", "py-1", "m-0", "list-none", "shadow-none sm:shadow-md", "border-0", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-700"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}