// This tiny shim allows the mode code to go mostly unmodified.
const modes = {};
export const CodeMirror = {
  defineMIME: (key, value) => modes[key] = value,
  resolveMode: key => modes[key]
};
