import * as $ from 'jquery';
export const getReadme = () => {
  return get(
    'https://raw.githubusercontent.com/troy-lamerton/editor-for-quest/master/README.md',
    {},
  );
};

export const get = (endpoint: string, data = {}) => {
  return $.get(endpoint, data);
};
