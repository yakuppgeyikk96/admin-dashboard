const ifPathnameIncludes = (pathname: string, basepath: string | undefined) => {
  if (basepath === "/") {
    return pathname === basepath;
  }
  return basepath && pathname.includes(basepath);
};

export default ifPathnameIncludes;