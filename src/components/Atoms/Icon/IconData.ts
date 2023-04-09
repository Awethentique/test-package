import iconSet from '../../../../assets/fonts/config.json';

export const fontelloIconSet = iconSet.glyphs.map((item) => {
  // const iconName = `${iconSet.css_prefix_text}${item.css}`; // For React css classnames
  const iconName = `${item.css}`; // For React native icon names
  return iconName;
});
