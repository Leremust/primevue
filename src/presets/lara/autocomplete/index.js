export default {
  root: ({ props }) => ({
      class: [
        "relative",
        // Flex
        {
          flex: props.fluid,
          "inline-flex": !props.fluid
        },
        // Size
        { "w-full": props.multiple },
        // Color
        "text-surface-900 dark:text-surface-0",
        //States
        {
          "opacity-60 select-none pointer-events-none cursor-default": props.disabled
        }
      ]
    }),
  inputMultiple: ({ props, state }) => ({
      class: [
        // Font
        "text-base leading-[normal]",
        // Flex
        "flex items-center flex-wrap",
        "gap-2",
        // Spacing
        "m-0 list-none",
        "px-3 py-1.5",
        // Size
        "w-full",
        "min-h-[2.877rem]",
        // Shape
        "appearance-none rounded-md",
        // Color
        "text-surface-700 dark:text-white/80",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        "bg-surface-0 dark:bg-surface-900",
        "border",
        { "border-surface-300 dark:border-surface-600": !props.invalid },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid },
        // States
        { "hover:border-primary": !props.invalid },
        "focus:outline-none focus:outline-offset-0",
        { "ring ring-primary-400/50 dark:ring-primary-300/50": state.focused },
        { "ring ring-primary-400/50 dark:ring-primary-300/50": state.hovered },
        // Transition
        "transition duration-200 ease-in-out",
        // Misc
        "cursor-text overflow-hidden"
      ]
    }),
  inputToken: {
    class: ["py-1.5 px-0", "inline-flex flex-auto"]
  },
  inputChip: {
    class: "flex-auto inline-flex pt-1 pb-1"
  },
  input: {
    class: "border-none outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full"
  },
  chipItem: {
    root: {
      class: ["inline-flex items-center", "py-1.5 px-3", "rounded-[1.14rem]", "bg-surface-200 dark:bg-surface-700", "text-surface-700 dark:text-white/70", "cursor-default"]
    }
  },
  dropdown: {
    class: ["relative", "items-center inline-flex text-center align-bottom", "rounded-r-md", "px-4 py-3 leading-[normal]", "text-primary-contrast", "bg-primary", "border border-primary", "focus:outline-none focus:outline-offset-0 focus:ring", "hover:bg-primary-emphasis hover:border-primary-emphasis", "focus:ring-primary-400/50 dark:focus:ring-primary-300/50"]
  },
  loader: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin"]
  },
  overlay: {
    class: ["bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-white/80", "border-0", "rounded-md", "shadow-md", "max-h-[200px] overflow-auto"]
  },
  list: {
    class: "py-3 px-0 list-none m-0"
  },
  option: ({ context }) => ({
      class: [
        "relative",
        // Font
        "font-normal text-base leading-[normal]",
        // Spacing
        "m-0 px-5 py-3",
        // Shape
        "border-0 rounded-none",
        // Colors
        {
          "text-surface-700 dark:text-white/80": !context.focused && !context.selected,
          "bg-surface-200 dark:bg-surface-600/60": context.focused && !context.selected,
          "text-surface-700 dark:text-white/80": context.focused && !context.selected,
          "bg-highlight": context.selected
        },
        //States
        { "hover:bg-surface-100 dark:hover:bg-surface-600/80": !context.focused && !context.selected },
        { "hover:bg-highlight-emphasis": context.selected },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        // Transition
        "transition-shadow duration-200",
        // Misc
        "cursor-pointer overflow-hidden whitespace-nowrap"
      ]
    }),
  optionGroup: {
    class: ["font-bold", "m-0 p-3", "bg-surface-0 dark:bg-surface-700", "text-surface-800 dark:text-white/80", "cursor-auto"]
  },
  emptyMessage: {
    class: ["leading-[normal]", "py-3 px-5", "text-surface-800 dark:text-white/80", "bg-transparent"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}