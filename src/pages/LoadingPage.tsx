import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function LoadingPage() {
  return (
    <div className="flex h-screen justify-center items-center bg-[white]/5">
      <FontAwesomeIcon icon={faSpinner} pulse size="4x" color="lightGreen" />
    </div>
  );
}

export default LoadingPage;
