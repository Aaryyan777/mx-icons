import CancelCircleLinear from "./CancelCircleLinear";
import CancelCircleBold from "./CancelCircleBold";

export { CancelCircleLinear, CancelCircleBold };

export const variants = [
  {
    variant: "linear",
    slug: "cancel-circle-linear",
    Component: CancelCircleLinear,
    componentName: "CancelCircleLinear",
  },
  {
    variant: "bold",
    slug: "cancel-circle-bold",
    Component: CancelCircleBold,
    componentName: "CancelCircleBold",
  },
];

export default { CancelCircleLinear, CancelCircleBold };
