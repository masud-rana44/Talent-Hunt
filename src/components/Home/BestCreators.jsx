import useBestCreators from "../../hooks/useBestCreators";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader";
import SectionHeading from "../Shared/SectionHeading";
import CreatorSlider from "./CreatorSlider";

const BestCreators = () => {
  const { creators, isLoading } = useBestCreators();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-[340px]">
      <Container>
        <SectionHeading
          title="Best Creators"
          subtitle="See our best creators"
        />
        <CreatorSlider creators={creators} />
      </Container>
    </div>
  );
};

export default BestCreators;
