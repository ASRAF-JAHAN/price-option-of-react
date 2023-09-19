import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
   
    const  priceOptions =  [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio and weight training areas",
              "Use of locker rooms and showers",
              "Free Wi-Fi",
              "Complimentary fitness assessment",
              "Access to select group fitness classes"
            ],
            "price": 30
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to all gym facilities including pool and sauna",
              "Unlimited group fitness classes",
              "Personalized workout plan",
              "Nutritional counseling sessions",
              "Discounts on personal training sessions",
              "Access to exclusive member events"
            ],
            "price": 50
          },
          {
            "id": 3,
            "name": "Family Membership",
            "features": [
              "Access for two adults and up to two children",
              "Use of childcare facilities",
              "Access to family-friendly fitness classes",
              "Discounts on family activities and events",
              "Complimentary family fitness assessment"
            ],
            "price": 80
          },
          {
            "id": 4,
            "name": "Student Membership",
            "features": [
              "Valid for full-time students with valid ID",
              "Access to gym during off-peak hours",
              "Discounts on select group classes",
              "Free student fitness workshops"
            ],
            "price": 25
          }
        ]
     
      
    return (
        <div  className="m-12">
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
              priceOptions.map(option =>
                 <PriceOption key={option.id} option={option}></PriceOption>)  
            }
            </div>
        </div>
    );
};

export default PriceOptions;