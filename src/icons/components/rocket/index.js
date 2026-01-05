import RocketLinear from "./RocketLinear";
import RocketBold from "./RocketBold";

export { RocketLinear, RocketBold };

export const variants = [
  {
    variant: "linear",
    slug: "rocket-linear",
    Component: RocketLinear,
    componentName: "RocketLinear",
  },
  {
    variant: "bold",
    slug: "rocket-bold",
    Component: RocketBold,
    componentName: "RocketBold",
  },
];

export default { RocketLinear, RocketBold };