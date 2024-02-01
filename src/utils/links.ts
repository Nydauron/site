export const getNormalizedLink = (link: ProjectLink): string => {
  switch (link.type) {
    case "github":
      //FIX: Not as secure as i'd like it to be ...
      return `https://github.com/${link.repo}`;
    case "internal":
      // FIX: Maybe use URL to strip off domain just in case
      return link.path;
    default:
      return link.href;
  }
};
