import NewTwitterLinear from "./NewTwitterLinear";
import NewTwitterBulk from "./NewTwitterBulk";

export { NewTwitterLinear, NewTwitterBulk };

export const variants = [
  {
    variant: "linear",
    slug: "new-twitter-linear",
    Component: NewTwitterLinear,
    componentName: "NewTwitterLinear",
  },
  {
    variant: "bulk",
    slug: "new-twitter-bulk",
    Component: NewTwitterBulk,
    componentName: "NewTwitterBulk",
  },
];

export default { NewTwitterLinear, NewTwitterBulk };
