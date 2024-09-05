export default {
  root: ({ props }) => ({
      class: [
        "relative",
        // Flex & Alignment
        { "flex flex-col": props.scrollable && props.scrollHeight === "flex" },
        // Size
        { "h-full": props.scrollable && props.scrollHeight === "flex" }
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
        { relative: props.scrollable, "flex flex-col grow": props.scrollable && props.scrollHeight === "flex" },
        // Size
        { "h-full": props.scrollable && props.scrollHeight === "flex" }
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
  table: {
    class: "w-full border-spacing-0 border-separate"
  },
  thead: ({ context }) => ({
      class: [
        {
          "bg-surface-50 dark:bg-surface-800 top-0 z-40 sticky": context.scrollable
        }
      ]
    }),
  tbody: ({ instance, context }) => ({
      class: [
        {
          "sticky z-20": instance.frozenRow && context.scrollable
        },
        "bg-surface-50 dark:bg-surface-800"
      ]
    }),
  tfoot: ({ context }) => ({
      class: [
        {
          "bg-surface-50 bottom-0 z-0": context.scrollable
        }
      ]
    }),
  footer: {
    class: ["font-bold", "border-t-0 border-b border-x-0", "p-4", "bg-surface-50 dark:bg-surface-800", "border-surface-200 dark:border-surface-700", "text-surface-700 dark:text-white/80"]
  },
  column: {
    headerCell: ({ context, props }) => ({
          class: [
            "font-bold",
            // Position
            { "sticky z-20 border-b": props.frozen || props.frozen === "" },
            { relative: context.resizable },
            // Alignment
            "text-left",
            // Shape
            { "first:border-l border-y border-r": context == null ? void 0 : context.showGridlines },
            "border-0 border-b border-solid",
            // Spacing
            (context == null ? void 0 : context.size) === "small" ? "p-2" : (context == null ? void 0 : context.size) === "large" ? "p-5" : "p-4",
            // Color
            (props.sortable === "" || props.sortable) && context.sorted ? "bg-highlight" : "bg-surface-50 text-surface-700 dark:text-white/80 dark:bg-surface-800",
            "border-surface-200 dark:border-surface-700 ",
            // States
            { "hover:bg-surface-100 dark:hover:bg-surface-400/30": (props.sortable === "" || props.sortable) && !(context != null && context.sorted) },
            "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
            // Transition
            { "transition duration-200": props.sortable === "" || props.sortable },
            // Misc
            { "cursor-pointer": props.sortable === "" || props.sortable },
            {
              "overflow-hidden space-nowrap border-y bg-clip-padding": context.resizable
              // Resizable
            }
          ]
      }),
    columnHeaderContent: {
      class: "flex items-center"
    },
    sort: ({ context }) => ({
          class: [context.sorted ? "text-primary-500" : "text-surface-700", context.sorted ? "dark:text-primary-400" : "dark:text-white/80"]
      }),
    bodyCell: ({ props, context, state, parent }) => {
          var _a, _b, _c;
          return {
            class: [
              //Position
              { "sticky box-border border-b": parent.instance.frozenRow },
              { "sticky box-border border-b z-20": props.frozen || props.frozen === "" },
              // Alignment
              "text-left",
              // Shape
              "border-0 border-b border-solid",
              { "first:border-l border-r border-b": context == null ? void 0 : context.showGridlines },
              { "bg-surface-0 dark:bg-surface-800": parent.instance.frozenRow || props.frozen || props.frozen === "" },
              // Spacing
              { "p-2": (context == null ? void 0 : context.size) === "small" && !state.d_editing },
              { "p-5": (context == null ? void 0 : context.size) === "large" && !state.d_editing },
              { "p-4": (context == null ? void 0 : context.size) !== "large" && (context == null ? void 0 : context.size) !== "small" && !state.d_editing },
              { "py-[0.6rem] px-2": state.d_editing },
              // Color
              "border-surface-200 dark:border-surface-700",
              {
                "overflow-hidden whitespace-nowrap border-y bg-clip-padding": (_c = (_b = (_a = parent.instance) == null ? void 0 : _a.$parentInstance) == null ? void 0 : _b.$parentInstance) == null ? void 0 : _c.resizableColumns
                // Resizable
              }
            ]
          };
      },
    footerCell: ({ context }) => ({
          class: [
            // Font
            "font-bold",
            // Alignment
            "text-left",
            // Shape
            "border-0 border-b border-solid",
            { "border-x border-y": context == null ? void 0 : context.showGridlines },
            // Spacing
            (context == null ? void 0 : context.size) === "small" ? "p-2" : (context == null ? void 0 : context.size) === "large" ? "p-5" : "p-4",
            // Color
            "border-surface-200 dark:border-surface-700",
            "text-surface-700 dark:text-white/80",
            "bg-surface-50 dark:bg-surface-800"
          ]
      }),
    sortIcon: ({ context }) => ({
          class: ["ml-2", context.sorted ? "text-inherit" : "text-surface-700 dark:text-white/70"]
      }),
    columnFilter: {
      class: "inline-flex items-center ml-auto"
    },
    filterOverlay: {
      class: ["absolute top-0 left-0", "border-0 dark:border", "rounded-md", "shadow-md", "min-w-[12.5rem]", "bg-surface-0 dark:bg-surface-800", "text-surface-800 dark:text-white/80", "dark:border-surface-700"]
    },
    filterConstraintList: {
      class: "m-0 p-0 py-3 list-none"
    },
    filterConstraint: ({ context }) => ({
          class: [
            // Font
            "font-normal",
            "leading-none",
            // Position
            "relative",
            // Shape
            "border-0",
            "rounded-none",
            // Spacing
            "m-0",
            "py-3 px-5",
            // Color
            { "bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-white/80": !(context != null && context.highlighted) },
            { "bg-highlight": context == null ? void 0 : context.highlighted },
            //States
            { "hover:bg-surface-100 dark:hover:bg-surface-600/80": !(context != null && context.highlighted) },
            { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80": !(context != null && context.highlighted) },
            "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
            // Transitions
            "transition-shadow",
            "duration-200",
            // Misc
            "cursor-pointer",
            "overflow-hidden",
            "whitespace-nowrap"
          ]
      }),
    filterOperator: {
      class: ["border-b border-solid", "rounded-t-md", "text-surface-700 dark:text-white/80", "border-surface-200 dark:border-surface-800", "bg-surface-0 dark:bg-surface-700", "[&>[data-pc-name=pcfilteroperatordropdown]]:w-full"]
    },
    filter: ({ instance }) => ({
          class: [{ "flex items-center w-full gap-2": instance.display === "row", "inline-flex ml-auto": instance.display === "menu" }]
      }),
    filterRuleList: "flex flex-col gap-2",
    filterRule: "flex flex-col gap-2",
    filterButtonbar: "flex items-center justify-between p-0",
    filterAddButtonContainer: "[&>[data-pc-name=pcfilteraddrulebutton]]:w-full",
    rowToggleButton: {
      class: ["relative", "inline-flex items-center justify-center", "text-left", "m-0 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
    },
    columnResizer: {
      class: ["block", "absolute top-0 right-0", "w-2 h-full", "m-0 p-0", "border border-transparent", "cursor-col-resize"]
    },
    transition: {
      class: "p-4 flex flex-col gap-2",
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  bodyRow: ({ context, props }) => ({
      class: [
        // Color
        "dark:text-white/80",
        { "bg-highlight": context.selected },
        { "bg-surface-0 text-surface-600 dark:bg-surface-800": !context.selected },
        { "font-bold bg-surface-0 dark:bg-surface-800 z-20": props.frozenRow },
        { "odd:bg-surface-0 odd:text-surface-600 dark:odd:bg-surface-800 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-900/50": context.stripedRows },
        // State
        { "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 ring-inset dark:focus:ring-primary-300/50": context.selectable },
        { "hover:bg-surface-300/20 hover:text-surface-600": props.selectionMode && !context.selected },
        // Transition
        { "transition duration-200": props.selectionMode && !context.selected || props.rowHover },
        // Misc
        { "cursor-pointer": props.selectionMode }
      ]
    }),
  rowExpansion: {
    class: "bg-surface-0 dark:bg-surface-800 text-surface-600 dark:text-white/80"
  },
  rowGroupHeader: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-800"]
  },
  rowGroupFooter: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-800"]
  },
  rowToggleButton: {
    class: ["relative", "inline-flex items-center justify-center", "text-left", "m-0 p-0", "w-8 h-8", "border-0 rounded-full", "text-surface-500 dark:text-white/70", "bg-transparent", "focus-visible:outline-none focus-visible:outline-offset-0", "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50", "transition duration-200", "overflow-hidden", "cursor-pointer select-none"]
  },
  rowToggleIcon: {
    class: "inline-block w-4 h-4"
  },
  columnResizeIndicator: {
    class: "absolute hidden w-[2px] z-20 bg-primary"
  }
}