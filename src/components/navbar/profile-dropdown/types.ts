export interface ProfileData {
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface ProfileMenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive";
}
