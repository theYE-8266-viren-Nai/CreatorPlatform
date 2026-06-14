import { CenteredSpinner } from "@/components/ui/spinner";

export default function UserProfileLoading() {
  return (
    <div className="hero-gradient flex min-h-screen items-center justify-center px-4 py-20">
      <CenteredSpinner />
    </div>
  );
}
