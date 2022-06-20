import { SectionTitle } from "../sectionTitle";

export const RecipeSection = ({
  sectionTitle,
  sectionContent,
}: {
  sectionTitle: string;
  sectionContent: string;
}) => {
  return (
    <>
      <SectionTitle sectionTitle={sectionTitle} />
      <div className="text-sm">{sectionContent}</div>
    </>
  );
};
