export default {
  root: "flex [&_[data-pc-name=pclist]]:h-full",
  sourceControls: {
    class: ["flex xl:flex-col justify-center gap-2", "p-[1.125rem]"]
  },
  sourceListContainer: {
    class: ["grow shrink basis-2/4", "rounded-md", "bg-surface-0 dark:bg-surface-900", "border border-surface-200 dark:border-surface-700", "outline-none"]
  },
  transferControls: {
    class: ["flex xl:flex-col justify-center gap-2", "p-[1.125rem]"]
  },
  targetListContainer: {
    class: ["grow shrink basis-2/4", "rounded-md", "bg-surface-0 dark:bg-surface-900", "border border-surface-200 dark:border-surface-700", "outline-none"]
  },
  targetControls: {
    class: ["flex xl:flex-col justify-center gap-2", "p-[1.125rem]"]
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none"
  }
}