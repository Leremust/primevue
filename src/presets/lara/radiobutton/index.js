export default {
  root: {
    class: ["relative", "inline-flex", "align-bottom", "w-[1.571rem] h-[1.571rem]", "cursor-pointer", "select-none"]
  },
  box: ({ props }) => ({
      class: [
        // Flexbox
        "flex justify-center items-center",
        // Size
        "w-[1.571rem] h-[1.571rem]",
        // Shape
        "border-2",
        "rounded-full",
        // Transition
        "transition duration-200 ease-in-out",
        // Colors
        {
          "text-surface-700 dark:text-white/80": props.value !== props.modelValue && props.value !== void 0,
          "bg-surface-0 dark:bg-surface-900": props.value !== props.modelValue && props.value !== void 0,
          "border-surface-100 dark:border-surface-700": props.value !== props.modelValue && props.value !== void 0 && !props.invalid,
          "border-primary": props.value == props.modelValue && props.value !== void 0,
          "bg-primary": props.value == props.modelValue && props.value !== void 0
        },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid },
        // States
        {
          "peer-hover:border-primary dark:peer-hover:border-primary": !props.disabled && !props.invalid,
          "peer-hover:border-primary-emphasis peer-hover:bg-primary-emphasis": !props.disabled && props.value == props.modelValue && props.value !== void 0,
          "peer-focus-visible:border-primary-500 dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20": !props.disabled,
          "opacity-60 cursor-default": props.disabled
        }
      ]
    }),
  input: {
    class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded-md", "outline-none", "border-2 border-surface-200 dark:border-surface-700", "appearance-none", "cursor-pointer"]
  },
  icon: ({ props }) => ({
      class: [
        "block",
        // Shape
        "rounded-full",
        // Size
        "w-[0.857rem] h-[0.857rem]",
        // Colors
        "bg-surface-0 dark:bg-surface-900",
        // Conditions
        {
          "backface-hidden scale-10 invisible": props.value !== props.modelValue,
          "transform visible scale-[1.1]": props.value == props.modelValue
        },
        // Transition
        "transition duration-200"
      ]
    })
}