import DiscordLinear from "./DiscordLinear";
import DiscordBold from "./DiscordBold";

export { DiscordLinear, DiscordBold };

export const variants = [
  {
    variant: "linear",
    slug: "discord-linear",
    Component: DiscordLinear,
    componentName: "DiscordLinear",
  },
  {
    variant: "bold",
    slug: "discord-bold",
    Component: DiscordBold,
    componentName: "DiscordBold",
  },
];

export default { DiscordLinear, DiscordBold };
