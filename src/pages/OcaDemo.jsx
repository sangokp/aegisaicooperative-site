import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function OcaDemo() {
  return (
    <div className="py-32 text-center max-w-2xl mx-auto px-6">
      <div className="w-12 h-12 rounded-xl bg-[var(--aegis-accent-muted)] border border-[var(--aegis-border-active)] flex items-center justify-center mx-auto mb-8">
        <Shield size={24} className="text-[var(--aegis-accent)]" />
      </div>
      <h1 className="font-display text-4xl font-bold text-[var(--aegis-text-primary)] mb-4 tracking-tight">Industrial Demo</h1>
      <p className="text-[var(--aegis-text-secondary)] mb-8">
        This demo is available by invitation. Contact us for access.
      </p>
      <Link
        to="/contact"
        className="btn-premium inline-block py-4"
      >
        Request Access
      </Link>
    </div>
  );
}
