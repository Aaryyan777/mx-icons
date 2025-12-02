import GithubLinear from "./GithubLinear";
import GithubBold from "./GithubBold";
import GithubBulk from "./GithubBulk";

export { GithubLinear, GithubBold, GithubBulk };

export const variants = [
  {
    variant: "linear",
    slug: "github-linear",
    Component: GithubLinear,
    componentName: "GithubLinear",
  },
  {
    variant: "bold",
    slug: "github-bold",
    Component: GithubBold,
    componentName: "GithubBold",
  },
  {
    variant: "bulk",
    slug: "github-bulk",
    Component: GithubBulk,
    componentName: "GithubBulk",
  },
];

export default { GithubLinear, GithubBold, GithubBulk };
