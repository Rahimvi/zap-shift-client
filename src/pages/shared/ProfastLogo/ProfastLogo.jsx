import Logo from "../../../assets/logo.png";

const ProfastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={Logo} alt="" />
      <p className="text-3xl -ms-2">zapShift</p>
    </div>
  );
};

export default ProfastLogo;
