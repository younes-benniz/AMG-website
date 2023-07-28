import sedan from "../assets/sedan.jpeg";
import cla from "../assets/cla.jpeg";
import Vehicle from "./Vehicle";

function Vehicles() {
	return (
		<section className="p-4 lg:p-8 text-black">
			<div className="container mx-auto space-y-12">
				<Vehicle
					image={sedan}
					title="Mercedes-AMG C-Class Sedan"
					description="Incredible performance meets boundless passion: The Mercedes-AMG C 63 S
							E-PERFORMANCE is the uncompromising combination of power, luxury,
							efficiency and pioneering technology. For pure emotions. And the pure
							AMG experience."
					imgaePositon="left"
				/>
				<Vehicle
					image={cla}
					title="The Mercedes-AMG CLA Coupé"
					description="As luxurious as it is sporty, as exciting as it is emotional: With its sharpened profile, the new Mercedes-AMG CLA Coupé embodies enormous driving pleasure and high-performance spirit. This makes it the ideal newcomer to the world of AMG."
					imgaePositon="right"
				/>
			</div>
		</section>
	);
}

export default Vehicles;
