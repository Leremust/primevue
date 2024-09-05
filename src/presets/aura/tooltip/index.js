export default {
  root: ({ context }) => ({
      class: [
        // Position and Shadows
        "absolute",
        "shadow-md",
        "p-fadein",
        // Spacing
        {
          "py-0 px-1": (context == null ? void 0 : context.right) || (context == null ? void 0 : context.left) || !(context != null && context.right) && !(context != null && context.left) && !(context != null && context.top) && !(context != null && context.bottom),
          "py-1 px-0": (context == null ? void 0 : context.top) || (context == null ? void 0 : context.bottom)
        }
      ]
    }),
  arrow: ({ context }) => ({
      class: [
        // Position
        "absolute",
        // Size
        "w-0",
        "h-0",
        // Shape
        "border-transparent",
        "border-solid",
        {
          "border-y-[10px] border-r-[10px] border-l-0 border-r-surface-700": (context == null ? void 0 : context.right) || !(context != null && context.right) && !(context != null && context.left) && !(context != null && context.top) && !(context != null && context.bottom),
          "border-y-[10px] border-l-[10px] border-r-0 border-l-surface-700": context == null ? void 0 : context.left,
          "border-x-[10px] border-t-[10px] border-b-0 border-t-surface-700": context == null ? void 0 : context.top,
          "border-x-[10px] border-b-[10px] border-t-0 border-b-surface-700": context == null ? void 0 : context.bottom
        },
        // Spacing
        {
          "-mt-[10px] top-1/2": (context == null ? void 0 : context.right) || (context == null ? void 0 : context.left) || !(context != null && context.right) && !(context != null && context.left) && !(context != null && context.top) && !(context != null && context.bottom),
          "-ml-[10px] left-1/2": (context == null ? void 0 : context.top) || (context == null ? void 0 : context.bottom)
        }
      ]
    }),
  text: {
    class: ["p-3", "bg-surface-700", "text-white", "leading-none", "rounded-md", "whitespace-pre-line", "break-words"]
  }
}