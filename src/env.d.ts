/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ProjectTag =
  | "discordjs"
  | "java"
  | "javax"
  | "javascript"
  | "library"
  | "network"
  | "poker"
  | "rust";

type Project = {
  name: string;
  image?: ImageMetadata;
  synopsis: string;
  dateRange: DateRange;
  tags: ProjectTag[];
  links: ProjectLink[];
};

type DateRange = {
  start: string;
  end: string | null;
};

type ProjectLink =
  | {
      type: "github";
      repo: string;
    }
  | {
      type: "internal";
      path: string;
    }
  | {
      type: "general";
      href: string;
      icon?: ImageMetadata;
    };
