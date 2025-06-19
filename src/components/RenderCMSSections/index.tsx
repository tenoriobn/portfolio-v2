import { useCMSContent } from 'src/hook';
import { cmsSections } from 'src/sections';

export default function RenderCMSSections() {
  const pageContent = useCMSContent();

  return (
    <>
      {pageContent.map((section) => {
        const Component = cmsSections[section.componentName as keyof typeof cmsSections] as React.FC<unknown>;
        if (!Component) return null;
        return <Component key={section.id} />;
      })}
    </>
  );
}