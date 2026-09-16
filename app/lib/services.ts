import servicesData from '../data/services.json';
import type { IconName } from '../components/Icon';

export interface ServiceListItem {
  title: string;
  slug: string;
  icon: IconName;
  summary: string;
  category: string;
}

export const serviceCategories = servicesData.categories;

export const allServices: ServiceListItem[] = servicesData.categories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.name, icon: item.icon as IconName })),
);
