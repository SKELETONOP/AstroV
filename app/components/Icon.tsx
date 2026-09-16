import {
  Compass,
  Sparkle,
  ShieldCheck,
  Heart,
  HeartHandshake,
  Users,
  Leaf,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Clock,
  Star,
  Plus,
  Minus,
  ArrowRight,
  Quote,
  CircleCheck,
  Sparkles,
  ScrollText,
  Landmark,
  Calendar,
  TrendingUp,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

const icons = {
  Compass,
  Sparkle,
  ShieldCheck,
  Heart,
  HeartHandshake,
  Users,
  Leaf,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Clock,
  Star,
  Plus,
  Minus,
  ArrowRight,
  Quote,
  CheckCircle2: CircleCheck,
  Sparkles,
  ScrollText,
  Landmark,
  Calendar,
  TrendingUp,
} satisfies Record<string, ComponentType<LucideProps>>;

export type IconName = keyof typeof icons;

interface IconProps extends Omit<LucideProps, 'name'> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

export default function Icon({ name, size = 20, strokeWidth = 1.75, ...rest }: IconProps) {
  const Cmp = icons[name] ?? Star;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
