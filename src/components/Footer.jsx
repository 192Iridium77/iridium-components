import LinksGroup from "./LinksGroup";

export default function Footer() {
  const SiteMap = () => {
    return <LinksGroup linkGroups={[]}></LinksGroup>;
  };

  const BusinessDetails = () => {
    return (
      <div className="text-center">
        <div>Business Name</div>
        <div className="mt-2">Qualifications</div>
        <div className="mt-2">ABN: 000000000 </div>
      </div>
    );
  };

  const Logos = () => {
    const columns = "w-6/12";
    return (
      <div className="flex flex-wrap items-center">
        <div className={columns}>Logo 1</div>
        <div className={columns}>Logo 2</div>
      </div>
    );
  };

  const Legal = () => {
    return <div className="text-sm text-center text-gray-400">Legal</div>;
  };

  return (
    <div className="bg-primary-600 py-12 mt-12">
      <div className="container text-white">
        <div className="mobile">
          <SiteMap />
          <div className="mt-12">
            <BusinessDetails />
          </div>
          <div className="mt-12">
            <Logos />
          </div>
          <div className="mt-12">
            <Legal />
          </div>
        </div>
        <div className="desktop">
          <div className="flex">
            <div className="w-6/12">
              <SiteMap />
            </div>
            <div className="w-6/12">
              <BusinessDetails />
            </div>
          </div>
          <div className="flex mt-12">
            <div className="w-6/12">
              <Logos />
            </div>
            <div className="w-6/12">
              <Legal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
