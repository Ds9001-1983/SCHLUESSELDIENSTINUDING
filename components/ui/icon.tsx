import {
  DoorOpen,
  KeyRound,
  Wrench,
  ShieldCheck,
  ShieldPlus,
  LogOut,
  Vault,
  Hammer,
  Building2,
  Clock,
  BadgeEuro,
  Star,
  Award,
  Phone,
  PhoneCall,
  MapPin,
  Mail,
  Check,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Navigation,
  type LucideIcon,
} from "lucide-react";

const map = {
  DoorOpen,
  KeyRound,
  Wrench,
  ShieldCheck,
  ShieldPlus,
  LogOut,
  Vault,
  Hammer,
  Building2,
  Clock,
  BadgeEuro,
  Star,
  Award,
  Phone,
  PhoneCall,
  MapPin,
  Mail,
  Check,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Navigation,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof map;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name as IconName] ?? ShieldCheck;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
