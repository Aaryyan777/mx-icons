import TwitchLinear from "./TwitchLinear";
import TwitchBold from "./TwitchBold";

export { TwitchLinear, TwitchBold };

export const variants = [
  {
    variant: "linear",
    slug: "twitch-linear",
    Component: TwitchLinear,
    componentName: "TwitchLinear",
  },
  {
    variant: "bold",
    slug: "twitch-bold",
    Component: TwitchBold,
    componentName: "TwitchBold",
  },
];

export default { TwitchLinear, TwitchBold };
