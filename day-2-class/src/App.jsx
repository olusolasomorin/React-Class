import CompanyCard from "./CompanyCard";

function App() {
  return (
    <div>
      <h1>Top Nigerian Tech Companies</h1>
      <div className="company-grid">
        <CompanyCard
          name="Paystack"
          industry="Fintech"
          location="Lagos"
          employees="200+"
          logo="https://images.seeklogo.com/logo-png/40/1/paystack-logo-png_seeklogo-409509.png"
          featured={true}
        />
        <CompanyCard 
          name="Flutterwave"
          industry="Payment Solutions"
          location="Lagos"
          employees="500+"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1eJCezNB-KM9Exk7Pwri7EBDcNP0vbDhsw&s"
          featured={true}
        />
        <CompanyCard 
          name="Andela"
          industry="Tech Talent"
          location="Lagos"
          employees="1000+"
          logo="https://images.squarespace-cdn.com/content/v1/5d3f42e6d06dd50001291e19/1565827609973-ZBLOR4NLFM1TCNB9ZR1H/andela-logo.png"
          featured={false}
        />
      </div>
    </div>
  )
}

export default App;