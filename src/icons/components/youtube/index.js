import YoutubeLinear from "./YoutubeLinear";
import YoutubeBold from "./YoutubeBold";

export { YoutubeLinear, YoutubeBold };

export const variants = [
  {
    variant: "linear",
    slug: "youtube-linear",
    Component: YoutubeLinear,
    componentName: "YoutubeLinear",
  },
  {
    variant: "bold",
    slug: "youtube-bold",
    Component: YoutubeBold,
    componentName: "YoutubeBold",
  },
];

export default { YoutubeLinear, YoutubeBold };
