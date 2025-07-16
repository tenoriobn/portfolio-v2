import { useCMSContent } from 'src/hooks';
import { cmsSections } from 'src/screens';

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