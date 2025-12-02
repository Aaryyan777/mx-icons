import TwitterLinear from "./TwitterLinear";
import TwitterBold from "./TwitterBold";

export { TwitterLinear, TwitterBold };

export const variants = [
  {
    variant: "linear",
    slug: "twitter-linear",
    Component: TwitterLinear,
    componentName: "TwitterLinear",
  },
  {
    variant: "bold",
    slug: "twitter-bold",
    Component: TwitterBold,
    componentName: "TwitterBold",
  },
];

export default { TwitterLinear, TwitterBold };
