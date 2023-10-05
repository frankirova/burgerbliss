
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
