import Dates from "@/components/Dates";
import Presse from "@/components/Presse";
import Partenaires from "@/components/Partenaires";
import Distribution from "@/components/Distribution";
import { SegmentsProvider } from "./SegmentsProvider";
import { ProjectDataProvider } from "./ProjectDataContext";

const projetLayout = ({ children }) => {
  return (
    <div>
      <SegmentsProvider>
        <ProjectDataProvider>
          {children}
          <Distribution />
          <Presse />
          <Dates />
          <Partenaires />
        </ProjectDataProvider>
      </SegmentsProvider>
    </div>
  );
};
export default projetLayout;
