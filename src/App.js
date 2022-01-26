import "./App.css";
import PriceCard from "./components/PriceCard";

function App() {
  // data for different plans
  let data = [
    {
      product: "Free",
      price: 0,
      users: "Single User",
      storage: "5GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomian: "Free Subdomain",
      subDomianEnabler: false,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },
    {
      product: "Plus",
      price: 9,
      users: "5 Users",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomian: "Free Subdomain",
      subDomianEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },
    {
      product: "Pro",
      price: 49,
      users: "Unlimited Users",
      storage: "150GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomian: "Free Subdomains",
      subDomianEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: true,
    },
  ];

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* each plan uses PriceCard component and displays the data */}
            {data.map((plan) => {
              return <PriceCard type={plan} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
