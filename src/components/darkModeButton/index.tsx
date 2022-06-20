import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const DarkModeButton = ({
  darkModeState,
  onClickHandler,
}: {
  darkModeState: boolean;
  onClickHandler: () => void;
}) => {
  return (
    <div className="container mx-auto flex justify-end py-2 sm:px-1">
      <button
        data-testid="layout-darkModeButton"
        aria-label={`Toggle dark mode ${darkModeState ? "off" : "on"}`}
        title="Toggle dark mode"
        type="button"
        onClick={onClickHandler}
      >
        {darkModeState ? (
          <FontAwesomeIcon icon={faSun} color="#FFA500" />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  );
};
