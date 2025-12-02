import Mail02Linear from "./Mail02Linear";
import Mail02Bold from "./Mail02Bold";

export { Mail02Linear, Mail02Bold };

export const variants = [
  {
    variant: "linear",
    slug: "mail-02-linear",
    Component: Mail02Linear,
    componentName: "Mail02Linear",
  },
  {
    variant: "bold",
    slug: "mail-02-bold",
    Component: Mail02Bold,
    componentName: "Mail02Bold",
  },
];

export default { Mail02Linear, Mail02Bold };
