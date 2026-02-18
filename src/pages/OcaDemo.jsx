import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function OcaDemo() {
  return (
    <div className="py-32 text-center max-w-2xl mx-auto px-6">
      <Shield size={48} className="mx-auto mb-8 text-[var(--aegis-rust)]" />
      <h1 className="font-display text-4xl font-medium text-[var(--aegis-text-primary)] mb-4">Industrial Demo</h1>
      <p className="text-[var(--aegis-text-secondary)] mb-8">
        This demo is available by invitation. Contact us for access.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-[var(--aegis-text-primary)] text-[var(--aegis-void)] px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-[var(--aegis-rust)] transition-colors"
      >
        Request Access
      </Link>
    </div>
  );
}
