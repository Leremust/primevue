export default {
  root: {
    class: ["rounded-md", "p-4", "bg-surface-0 dark:bg-surface-900", "overflow-x-auto"]
  },
  list: {
    class: ["flex items-center flex-nowrap", "m-0 p-0 list-none leading-none"]
  },
  itemLink: {
    class: ["flex items-center gap-2", "rounded-md", "text-surface-600 dark:text-white/70", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400", "transition-shadow duration-200", "text-decoration-none"]
  },
  itemIcon: {
    class: "text-surface-600 dark:text-white/70"
  },
  separator: {
    class: ["flex items-center", "mx-2", "text-surface-600 dark:text-white/70"]
  }
}