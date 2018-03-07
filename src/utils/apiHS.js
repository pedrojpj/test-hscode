import codes from './data/hscode.json';

export const getChapters = () => codes.results.filter(item => item.parent === 'TOTAL');
export const getHeadings = chapter =>
  codes.results.filter(item => item.parent === chapter).map(item => ({
    ...item,
    id: item.id.slice(-2)
  }));
