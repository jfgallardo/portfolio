import LandingView from "@/sections/landing/server/landing-view";
import { langParam } from "@/types/types";

type Props = {
  params: Promise<{ lang: langParam }>
}

export default function Home({ params }: Props) {

  return (
    <div className="min-h-screen">
      <LandingView params={params} />
    </div>
  );
}
