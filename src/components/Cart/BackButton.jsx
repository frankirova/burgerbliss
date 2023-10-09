import { Box } from "@chakra-ui/react";
export const BackButton = ({ setCurrentStep }) => {
  return (
    <Box
      w={"24px"}
      color="primary"
      aria-label="Go back"
      size="lg"
      fontSize={["sm", "sm", "lg", "lg"]}
      fontWeight="500"
      onClick={() => setCurrentStep("cart")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </Box>
  );
};
