export const getProps = (test: any) => (props: any) => {
  const next: any = {};
  for (const key in props) {
    if (test(key || '')) next[key] = props[key];
  }
  return next;
};

const MRE = /^m[trblxy]?$/;

export const getMargin = getProps((k: any) => MRE.test(k));
export const omitMargin = getProps((k: any) => !MRE.test(k));
