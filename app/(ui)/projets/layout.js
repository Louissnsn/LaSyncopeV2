import Dates from "@/components/Dates";
import Presse from "@/components/Presse";
import Partenaires from "@/components/Partenaires";
const projetLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Presse />
      <Dates />
      <Partenaires />
    </div>
  );
};
export default projetLayout;
