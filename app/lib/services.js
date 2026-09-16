import servicesData from '../data/services.json';

export const serviceCategories = servicesData.categories;

export const allServices = servicesData.categories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.name })),
);
