import { Deck } from "@/components/deck";
import { CoverPage } from "@/components/pages/cover-page";
import { StackPage } from "@/components/pages/stack-page";
import { ProjectsPage } from "@/components/pages/projects-page";
import { WritingPage } from "@/components/pages/writing-page";
import { ContactPage } from "@/components/pages/contact-page";
import { projects } from "@/lib/data";
//app/page.tsx
export default function Home() {
  const firstHalf = projects.slice(0, 4);
  const secondHalf = projects.slice(4);

  const pages = [
    { label: "Cover", node: <CoverPage />, cover: true },
    { label: "Stack", node: <StackPage /> },
    {
      label: "Projects 1",
      bookmarkLabel: "Projects",
      node: <ProjectsPage title="Projects" items={firstHalf} />,
    },
    {
      label: "Projects 2",
      bookmarkLabel: "Projects",
      node: <ProjectsPage title="Projects" items={secondHalf} showMoreLink />,
    },
    { label: "Writing", node: <WritingPage /> },
    { label: "Connect", node: <ContactPage /> },
  ];

  return <Deck pages={pages} />;
}