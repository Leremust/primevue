export default {
  root: ({ props }) => ({
      class: [
        // Display
        "inline-block",
        // Misc
        { "opacity-60 select-none pointer-events-none cursor-default": props.disabled }
      ]
    }),
  preview: {
    class: ["text-base ", "m-0", "p-3", "rounded-lg w-8 h-8", "bg-surface-0 dark:bg-surface-900", "border border-surface-300 dark:border-surface-700", "hover:border-primary", "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-400/50 dark:focus:ring-primary-300/50", "transition-colors duration-200", "cursor-pointer"]
  },
  panel: ({ props }) => ({
      class: [
        // Position & Size
        {
          "relative h-[166px] w-[193px]": props.inline,
          "absolute h-[166px] w-[193px]": !props.inline
        },
        // Shape
        "shadow-md border",
        // Colors
        "bg-surface-800 border-surface-900 dark:border-surface-600"
      ]
    }),
  colorSelector: {
    class: ["absolute top-[8px] left-[8px]", "h-[150px] w-[150px]"]
  },
  color: {
    class: ["h-[150px] w-[150px]"],
    style: "background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)"
  },
  colorHandle: {
    class: ["absolute", "rounded-full border border-solid", "h-[10px] w-[10px]", "-ml-[5px] -mt-[5px]", "border-white", "cursor-pointer opacity-85"]
  },
  hue: {
    class: ["absolute top-[8px] left-[167px]", "h-[150px] w-[17px]", "opacity-85"],
    style: "background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)"
  },
  hueHandle: {
    class: ["absolute left-0 -ml-[2px] -mt-[5px]", "h-[10px] w-[21px]", "border-solid border-2", "cursor-pointer opacity-85"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}