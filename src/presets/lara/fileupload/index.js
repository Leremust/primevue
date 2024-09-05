export default {
  root: ({ props }) => ({
      class: [
        {
          "flex flex-wrap items-center justify-center gap-2": props.mode === "basic"
        }
      ]
    }),
  input: {
    class: "hidden"
  },
  header: {
    class: ["flex", "flex-wrap", "bg-surface-50", "dark:bg-surface-800", "text-surface-700", "dark:text-white/80", "p-5", "gap-2", "border", "border-solid", "border-surface-200", "dark:border-surface-700", "border-b-0", "rounded-tr-lg", "rounded-tl-lg"]
  },
  content: {
    class: ["relative", "bg-surface-0", "dark:bg-surface-900", "text-surface-700", "dark:text-white/80", "p-8", "border", "border-surface-200", "dark:border-surface-700", "rounded-b-lg", "[&>[data-pc-name=pcprogressbar]]:absolute", "[&>[data-pc-name=pcprogressbar]]:w-full", "[&>[data-pc-name=pcprogressbar]]:top-0", "[&>[data-pc-name=pcprogressbar]]:left-0", "[&>[data-pc-name=pcprogressbar]]:h-1"]
  },
  file: {
    class: ["flex", "items-center", "flex-wrap", "p-4", "mb-2", "last:mb-0", "border", "border-surface-200", "dark:border-surface-700", "gap-2", "rounded"]
  },
  fileThumbnail: "shrink-0",
  fileName: "mb-2 break-all",
  fileSize: "mr-2"
}