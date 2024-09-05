export default {
  root: {
    class: ["rounded-md", "p-4", "bg-surface-0 dark:bg-surface-700", "border border-surface-200 dark:border-surface-700", "overflow-x-auto"]
  },
  list: {
    class: ["flex items-center flex-nowrap", "m-0 p-0 list-none leading-none"]
  },
  itemLink: {
    class: ["flex items-center gap-2", "rounded-md", "text-surface-600 dark:text-white/70", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50", "transition-shadow duration-200", "text-decoration-none"]
  },
  itemIcon: {
    class: "text-surface-600 dark:text-white/70"
  },
  separator: {
    class: ["flex items-center", " mx-2", "text-surface-600 dark:text-white/70"]
  }
}