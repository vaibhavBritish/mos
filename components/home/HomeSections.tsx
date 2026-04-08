"use client";

import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

// Lazy load below-the-fold components with ssr: false
const ValueProposition = dynamic(() => import("@/components/home/ValueProposition"), { ssr: false });
const ServicesOverview = dynamic(() => import("@/components/home/ServicesOverview"), { ssr: false });
const Differentiation = dynamic(() => import("@/components/home/Differentiation"), { ssr: false });
const EventPositioning = dynamic(() => import("@/components/home/EventPositioning"), { ssr: false });
const ClientSegments = dynamic(() => import("@/components/home/ClientSegments"), { ssr: false });
const InsightsPreview = dynamic(() => import("@/components/home/InsightsPreview"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"), { ssr: false });

export default function HomeSections() {
  return (
    <>
      <LazySection minHeight="400px">
        <ValueProposition />
      </LazySection>

      <LazySection minHeight="600px">
        <ServicesOverview />
      </LazySection>

      <LazySection minHeight="600px">
        <Differentiation />
      </LazySection>

      <LazySection minHeight="500px">
        <EventPositioning />
      </LazySection>

      <LazySection minHeight="500px">
        <ClientSegments />
      </LazySection>

      <LazySection minHeight="500px">
        <InsightsPreview />
      </LazySection>

      <LazySection minHeight="400px">
        <FinalCTA />
      </LazySection>
    </>
  );
}
