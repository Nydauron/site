/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ProjectTag =
  | "assembly"
  | "api"
  | "aws"
  | "bot"
  | "c++"
  | "discordjs"
  | "discordpy"
  | "go"
  | "java"
  | "javax"
  | "javascript"
  | "library"
  | "mips"
  | "mongodb"
  | "network"
  | "poker"
  | "python"
  | "rust"
  | "simulation"
  | "wasm";

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
