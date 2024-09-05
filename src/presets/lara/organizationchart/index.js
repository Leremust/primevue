export default {
  table: {
    class: ["mx-auto my-0", "border-spacing-0 border-separate"]
  },
  cell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  node: ({ context }) => ({
      class: [
        "relative inline-block",
        // Spacing
        "p-5",
        // Shape
        "border",
        // Color
        {
          "text-surface-600 dark:text-white/80": !(context != null && context.selected),
          "bg-surface-0 dark:bg-surface-800": !(context != null && context.selected),
          "border-surface-200 dark:border-surface-700": !(context != null && context.selected),
          "bg-highlight": context == null ? void 0 : context.selected,
          "border-primary-200 dark:border-primary-600": context == null ? void 0 : context.selected
        },
        // States
        {
          "hover:bg-surface-100 dark:hover:bg-surface-700": (context == null ? void 0 : context.selectable) && !(context != null && context.selected),
          "hover:bg-highlight-emphasis": (context == null ? void 0 : context.selectable) && (context == null ? void 0 : context.selected)
        },
        { "cursor-pointer": context == null ? void 0 : context.selectable }
      ]
    }),
  lineCell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  connectorDown: {
    class: ["mx-auto my-0", "w-px h-[20px]", "bg-surface-200 dark:bg-surface-700"]
  },
  connectorLeft: ({ context }) => ({
      class: [
        // Alignment
        "text-center align-top",
        // Spacing
        "py-0 px-3",
        // Shape
        "rounded-none border-r",
        { "border-t": context.lineTop },
        // Color
        "border-surface-200 dark:border-surface-700"
      ]
    }),
  connectorRight: ({ context }) => ({
      class: [
        // Alignment
        "text-center align-top",
        // Spacing
        "py-0 px-3",
        // Shape
        "rounded-none",
        // Color
        { "border-t border-surface-200 dark:border-surface-700": context.lineTop }
      ]
    }),
  nodeCell: {
    class: "text-center align-top py-0 px-3"
  },
  nodeToggleButton: {
    class: ["absolute bottom-[-0.75rem] left-2/4 -ml-3", "z-20", "flex items-center justify-center", "w-6 h-6", "rounded-full", "bg-inherit text-inherit", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "cursor-pointer no-underline select-none"]
  },
  nodeToggleButtonIcon: {
    class: ["relative inline-block", "w-4 h-4"]
  }
}