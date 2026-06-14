import { CenteredSpinner } from "@/components/ui/spinner";

export default function AdminLoading() {
  return (
    <div className="hero-gradient flex min-h-screen items-center justify-center">
      <CenteredSpinner />
    </div>
  );
}
