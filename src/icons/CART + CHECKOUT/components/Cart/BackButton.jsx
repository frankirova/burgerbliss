import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackButton = ({ setCurrentStep }) => {
  return (
    <FontAwesomeIcon
      aria-label="Go back"
      icon={faArrowLeft}
      size="lg"
      fontSize={["sm", "sm", "lg", "lg"]}
      fontWeight="500"
      onClick={() => setCurrentStep("cart")}
    />
  );
};
