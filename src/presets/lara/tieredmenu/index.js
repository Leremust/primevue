export default {
  root: {
    class: ["rounded-md", "min-w-[12rem]", "py-1", "bg-surface-0 dark:bg-surface-700", "border border-surface-200 dark:border-surface-700"]
  },
  rootList: {
    class: ["flex flex-col", "list-none", "m-0", "p-0", "outline-none"]
  },
  item: {
    class: ["relative"]
  },
  itemContent: ({ context }) => ({
      class: [
        //Shape
        "rounded-none",
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
        "duration-200"
      ]
    }),
  itemLink: {
    class: ["relative", "flex", "items-center", "py-3", "px-5", "text-surface-700 dark:text-white/80", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  itemIcon: {
    class: ["mr-2", "text-surface-600 dark:text-white/70"]
  },
  itemLabel: {
    class: ["leading-none"]
  },
  submenuIcon: {
    class: ["ml-auto"]
  },
  submenu: {
    class: ["flex flex-col", "w-full sm:w-48", "py-1", "m-0", "list-none", "shadow-none sm:shadow-md", "border-0", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-700"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-1"
  }
}