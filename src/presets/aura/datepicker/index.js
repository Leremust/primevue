export default {
  root: ({ props }) => ({
      class: [
        // Display and Position
        {
          flex: props.fluid,
          "inline-flex": !props.fluid
        },
        "max-w-full",
        "relative"
      ]
    }),
  pcInput: ({ props, parent }) => {
      var _a;
      return {
        root: {
          class: [
            // Display
            "flex-auto w-[1%]",
            // Font
            "leading-none",
            // Colors
            "text-surface-600 dark:text-surface-200",
            "placeholder:text-surface-400 dark:placeholder:text-surface-500",
            { "bg-surface-0 dark:bg-surface-950": !props.disabled },
            "border",
            { "border-surface-300 dark:border-surface-600": !props.invalid },
            // Invalid State
            "invalid:focus:ring-red-200",
            "invalid:hover:border-red-500",
            { "border-red-500 dark:border-red-400": props.invalid },
            // Spacing
            "m-0 py-2 px-3",
            // Shape
            "appearance-none",
            { "rounded-md": !props.showIcon || props.iconDisplay == "input" },
            { "rounded-l-md  flex-1 pr-9": props.showIcon && props.iconDisplay !== "input" },
            { "rounded-md flex-1 pr-9": props.showIcon && props.iconDisplay === "input" },
            // Transitions
            "transition-colors",
            "duration-200",
            // States
            {
              "hover:border-surface-400 dark:hover:border-surface-600": !props.disabled && !props.invalid,
              "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10": !props.disabled,
              "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": props.disabled
            },
            // Filled State *for FloatLabel
            { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == "FloatLabel" && props.modelValue !== null }
          ]
        }
      };
    },
  dropdownIcon: {
    class: ["absolute top-1/2 -mt-2", "text-surface-600 dark:text-surface-200", "right-3"]
  },
  dropdown: {
    class: ["relative", "items-center inline-flex text-center align-bottom justify-center", "rounded-r-md", "py-2 px-0", "w-10", "leading-[normal]", "border border-l-0 border-surface-300 dark:border-surface-600", "focus:outline-none focus:outline-offset-0 focus:ring-1", "hover:bg-primary-hover hover:border-primary-hover", "focus:ring-primary-500 dark:focus:ring-primary-400"]
  },
  inputIconContainer: "absolute cursor-pointer top-1/2 right-3 -mt-3",
  inputIcon: "inline-block text-base",
  panel: ({ props }) => ({
      class: [
        // Display & Position
        {
          absolute: !props.inline,
          "inline-block": props.inline
        },
        // Size
        { "w-auto p-3 ": !props.inline },
        { "min-w-[80vw] w-auto p-3 ": props.touchUI },
        { "p-3 min-w-full": props.inline },
        // Shape
        "border rounded-lg",
        {
          "shadow-md": !props.inline
        },
        // Colors
        "bg-surface-0 dark:bg-surface-900",
        "border-surface-200 dark:border-surface-700",
        //misc
        { "overflow-x-auto": props.inline }
      ]
    }),
  header: {
    class: ["font-medium", "flex items-center justify-between", "p-0 pb-2", "m-0", "border-b", "rounded-t-md", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "border-surface-200 dark:border-surface-700"]
  },
  title: {
    class: ["leading-7", "mx-auto my-0"]
  },
  selectMonth: {
    class: ["text-base leading-[normal]", "font-medium", "rounded-md", "text-surface-700 dark:text-white/80", "transition duration-200", "p-1", "m-0 mr-2", "hover:text-primary-500 dark:hover:text-primary-400", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10", "cursor-pointer"]
  },
  selectYear: {
    class: ["text-base leading-[normal]", "font-medium", "rounded-md", "text-surface-700 dark:text-white/80", "transition duration-200", "p-1", "m-0 mr-2", "hover:text-primary-500 dark:hover:text-primary-400", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10", "cursor-pointer"]
  },
  table: {
    class: ["text-base leading-[normal]", "border-collapse", "w-full", "m-0 mt-2"]
  },
  tableHeaderCell: {
    class: ["p-1", "font-medium"]
  },
  weekHeader: {
    class: ["leading-5", "text-surface-600 dark:text-white/70", "opacity-60 cursor-default"]
  },
  weekNumber: {
    class: ["text-surface-600 dark:text-white/70", "opacity-60 cursor-default"]
  },
  weekday: {
    class: ["text-surface-500 dark:text-white/60", "p-1"]
  },
  dayCell: {
    class: ["p-1"]
  },
  weekLabelContainer: {
    class: ["flex items-center justify-center", "mx-auto", "w-8 h-8", "rounded-full", "border-transparent border", "leading-[normal]", "opacity-60 cursor-default"]
  },
  dayView: "w-full",
  day: ({ context }) => ({
      class: [
        // Flexbox and Alignment
        "flex items-center justify-center",
        "mx-auto",
        // Shape & Size
        "w-8 h-8",
        "rounded-full",
        "border-transparent border",
        "leading-[normal]",
        // Colors
        {
          "bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-white/70": context.date.today && !context.selected && !context.disabled,
          "bg-transparent text-surface-600 dark:text-white/70": !context.selected && !context.disabled && !context.date.today,
          "bg-highlight": context.selected && !context.disabled
        },
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
        {
          "hover:bg-surface-50 dark:hover:bg-surface-500/10": !context.selected && !context.disabled
        },
        {
          "opacity-60 cursor-default": context.disabled,
          "cursor-pointer": !context.disabled
        }
      ]
    }),
  monthView: {
    class: ["mt-2"]
  },
  month: ({ context }) => ({
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",
        // Size
        "w-1/3",
        "p-1",
        // Shape
        "rounded-md",
        // Colors
        {
          "text-surface-600 dark:text-white/70 bg-transparent": !context.selected && !context.disabled,
          "bg-highlight": context.selected && !context.disabled
        },
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
        {
          "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !context.selected && !context.disabled
        },
        // Misc
        "cursor-pointer"
      ]
    }),
  yearView: {
    class: ["mt-2"]
  },
  year: ({ context }) => ({
      class: [
        // Flexbox and Alignment
        "inline-flex items-center justify-center",
        // Size
        "w-1/2",
        "p-1",
        // Shape
        "rounded-md",
        // Colors
        {
          "text-surface-600 dark:text-white/70 bg-transparent": !context.selected && !context.disabled,
          "bg-highlight": context.selected && !context.disabled
        },
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
        {
          "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !context.selected && !context.disabled
        },
        // Misc
        "cursor-pointer"
      ]
    }),
  timePicker: {
    class: ["flex", "justify-center items-center", "border-t-1", "border-solid border-surface-200", "pt-2 mt-2"]
  },
  separatorContainer: {
    class: ["flex", "items-center", "flex-col", "px-2"]
  },
  separator: {
    class: ["text-xl"]
  },
  hourPicker: {
    class: ["flex", "items-center", "flex-col", "px-2"]
  },
  minutePicker: {
    class: ["flex", "items-center", "flex-col", "px-2"]
  },
  secondPicker: {
    class: ["flex", "items-center", "flex-col", "px-2"]
  },
  ampmPicker: {
    class: ["flex", "items-center", "flex-col", "px-2"]
  },
  calendarContainer: "flex",
  calendar: "flex-auto border-l first:border-l-0 border-surface-200",
  buttonbar: {
    class: ["flex justify-between items-center", "pt-2", "border-t border-surface-200 dark:border-surface-700"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}