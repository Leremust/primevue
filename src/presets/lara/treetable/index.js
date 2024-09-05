export default {
  root: ({ props }) => ({
      class: [
        "relative",
        {
          "flex flex-col h-full": props.scrollHeight === "flex"
        }
      ]
    }),
  mask: {
    class: ["absolute", "top-0 left-0", "z-20", "flex items-center justify-center", "w-full h-full", "bg-surface-100/40 dark:bg-surface-800/40", "transition duration-200"]
  },
  loadingIcon: {
    class: "w-8 h-8 animate-spin"
  },
  tableContainer: ({ props }) => ({
      class: [
        // Overflow
        {
          "relative overflow-auto": props.scrollable,
          "overflow-x-auto": props.resizableColumns
        }
      ]
    }),
  header: ({ props }) => ({
      class: [
        "font-bold",
        // Shape
        props.showGridlines ? "border-x border-t border-b-0" : "border-y border-x-0",
        // Spacing
        "p-4",
        // Color
        "bg-surface-50 dark:bg-surface-800",
        "border-surface-200 dark:border-surface-700",
        "text-surface-700 dark:text-white/80"
      ]
    }),
  footer: {
    class: ["bg-slate-50 text-slate-700", "border border-x-0 border-t-0 border-surface-50", "p-4 font-bold", "dark:bg-surface-900 dark:text-white/70 dark:border-surface-700"]
  },
  table: {
    class: ["border-collapse table-fixed w-full "]
  },
  thead: ({ props }) => ({
      class: [
        // Position & Z-index
        {
          "top-0 z-40 sticky": props.scrollable
        }
      ]
    }),
  tbody: ({ props }) => ({
      class: [
        // Block Display
        {
          block: props.scrollable
        }
      ]
    }),
  tfoot: ({ props }) => ({
      class: [
        // Block Display
        {
          block: props.scrollable
        }
      ]
    }),
  headerRow: ({ props }) => ({
      class: [
        // Flexbox & Width
        {
          "flex flex-nowrap w-full": props.scrollable
        }
      ]
    }),
  row: ({ context, props }) => ({
      class: [
        // Flex
        { "flex flex-nowrap w-full": context.scrollable },
        // Color
        "dark:text-white/80",
        { "bg-highlight": context.selected },
        { "bg-surface-0 text-surface-600 dark:bg-surface-800": !context.selected },
        // Hover & Flexbox
        {
          "hover:bg-surface-300/20 hover:text-surface-600": context.selectable && !context.selected
        },
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50",
        // Transition
        { "transition duration-200": props.selectionMode && !context.selected || props.rowHover }
      ]
    }),
  headerCell: ({ context, props }) => ({
      class: [
        "font-bold",
        // Position
        { "sticky z-40": context.scrollable && context.scrollDirection === "both" && context.frozen },
        // Flex & Alignment
        {
          "flex flex-1 items-center": context.scrollable,
          "flex-initial shrink-0": context.scrollable && context.scrollDirection === "both" && !context.frozen
        },
        "text-left",
        // Shape
        { "first:border-l border-y border-r": context == null ? void 0 : context.showGridlines },
        "border-0 border-b border-solid",
        // Spacing
        (context == null ? void 0 : context.size) === "small" ? "p-2" : (context == null ? void 0 : context.size) === "large" ? "p-5" : "p-4",
        // Color
        (props.sortable === "" || props.sortable) && context.sorted ? "bg-highlight" : "bg-surface-50 text-surface-700 dark:text-white/80 dark:bg-surface-800",
        "border-surface-200 dark:border-surface-700",
        // States
        { "hover:bg-surface-100 dark:hover:bg-surface-400/30": (props.sortable === "" || props.sortable) && !(context != null && context.sorted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        // Transition
        { "transition duration-200": props.sortable === "" || props.sortable },
        // Misc
        {
          "overflow-hidden relative bg-clip-padding": context.resizable && !context.frozen
        }
      ]
    }),
  column: {
    headerCell: ({ context, props }) => ({
          class: [
            "font-bold",
            // Position
            { "sticky z-40": context.scrollable && context.scrollDirection === "both" && context.frozen },
            // Flex & Alignment
            {
              "flex flex-1 items-center": context.scrollable,
              "flex-initial shrink-0": context.scrollable && context.scrollDirection === "both" && !context.frozen
            },
            "text-left",
            // Shape
            { "first:border-l border-y border-r": context == null ? void 0 : context.showGridlines },
            "border-0 border-b border-solid",
            // Spacing
            (context == null ? void 0 : context.size) === "small" ? "p-2" : (context == null ? void 0 : context.size) === "large" ? "p-5" : "p-4",
            // Color
            (props.sortable === "" || props.sortable) && context.sorted ? "bg-highlight" : "bg-surface-50 text-surface-700 dark:text-white/80 dark:bg-surface-800",
            "border-surface-200 dark:border-surface-700",
            // States
            { "hover:bg-surface-100 dark:hover:bg-surface-400/30": (props.sortable === "" || props.sortable) && !(context != null && context.sorted) },
            "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
            // Transition
            { "transition duration-200": props.sortable === "" || props.sortable },
            // Misc
            {
              "overflow-hidden relative bg-clip-padding": context.resizable && !context.frozen
            }
          ]
      }),
    bodyCell: ({ context }) => ({
          class: [
            // Position
            {
              sticky: context.scrollable && context.scrollDirection === "both" && context.frozen
            },
            // Flex & Alignment
            {
              "flex flex-1 items-center": context.scrollable,
              "flex-initial shrink-0": context.scrollable && context.scrollDirection === "both" && !context.frozen
            },
            "text-left",
            // Shape
            "border-0 border-b border-solid",
            "border-surface-200 dark:border-surface-700",
            {
              "border-x-0 border-l-0": !context.showGridlines
            },
            { "first:border-l border-r border-b": context == null ? void 0 : context.showGridlines },
            // Spacing
            (context == null ? void 0 : context.size) === "small" ? "p-2" : (context == null ? void 0 : context.size) === "large" ? "p-5" : "p-4",
            // Misc
            {
              "cursor-pointer": context.selectable,
              sticky: context.scrollable && context.scrollDirection === "both" && context.frozen,
              "border-x-0 border-l-0": !context.showGridlines
            }
          ]
      }),
    bodyCellContent: "flex items-center gap-2",
    rowToggleButton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left align-middle", "m-0 mr-2 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "hover:bg-surface-50 dark:hover:bg-surface-700", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    sortIcon: ({ context }) => ({
          class: ["ml-2 inline-block", context.sorted ? "text-inherit" : "fill-surface-700 dark:fill-white/70"]
      }),
    columnResizer: {
      class: ["block", "absolute top-0 right-0", "w-2 h-full", "m-0 p-0", "border border-transparent", "cursor-col-resize"]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  columnResizeIndicator: {
    class: "absolute hidden w-[2px] z-20 bg-primary"
  }
}