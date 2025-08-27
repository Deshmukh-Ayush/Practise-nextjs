// app/services/page.tsx

import type { Metadata } from 'next';

type Props = {
  // The searchParams are now a Promise in Next.js 15
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  // Await searchParams before accessing its properties
  const resolvedSearchParams = await searchParams;
  const plan = resolvedSearchParams.plan;
  const baseTitle = 'Services – MyApp';

  if (plan === 'premium') {
    return {
      title: `Premium ${baseTitle}`,
    };
  }

  return {
    title: baseTitle,
  };
}

export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>This is the services page content.</p>
    </div>
  );
}