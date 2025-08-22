import { AtSign, Facebook, Linkedin, Slack, Twitter } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProviderProps =
  | "linkedin"
  | "facebook"
  | "slack"
  | "twitter"
  | "threads"
  | "clipboard";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-off-site?url=${encodeURIComponent(
        config.url
      )}`
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/share.php?u=${encodeURIComponent(
        config.url
      )}`
  },
  slack: {
    name: "Slack",
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.slack.com/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`
  },
  twitter: {
    name: "Twitter",
    icon: <Twitter className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.x.com/intent/tweet?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`
  },
  threads: {
    name: "Threads",
    icon: <AtSign className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(
        config.title || ""
      )}${encodeURIComponent(config.url)}`
  }
};
