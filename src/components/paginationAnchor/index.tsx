import { Link } from "react-router-dom";

const commonArrowStyle =
  "page-link relative block rounded rounded border-0 bg-transparent py-1.5 px-3 outline-none transition-all duration-300 focus:shadow-none";
const enabledArrowStyle = "text-gray-800 hover:bg-gray-200 hover:text-gray-800";
const disabledArrowStyle = "pointer-events-none text-gray-500";

export const PaginationAnchor = ({
  isEnabled,
  pageLink,
  directionLabel,
}: {
  isEnabled: boolean;
  pageLink: string;
  directionLabel: string;
}) => {
  return (
    <Link
      to={pageLink}
      className={`page-item ${commonArrowStyle} ${
        isEnabled ? disabledArrowStyle : enabledArrowStyle
      }`}
      tabIndex={isEnabled ? -1 : 0}
      aria-disabled={isEnabled && true}
    >
      {directionLabel}
    </Link>
  );
};
