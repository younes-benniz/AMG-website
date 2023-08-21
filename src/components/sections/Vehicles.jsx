import sedan from "../../assets/sedan.jpeg";
import cla from "../../assets/cla.jpeg";
import Vehicle from "../Vehicle";
import LazyImage from "../LazyImage";

function Vehicles() {
	return (
		<section id="vehicles" className="p-4 lg:p-8 text-black">
			<div className="container mx-auto space-y-12">
				<Vehicle
					title="Mercedes-AMG C-Class Sedan"
					description="Incredible performance meets boundless passion: The Mercedes-AMG C 63 S
							E-PERFORMANCE is the uncompromising combination of power, luxury,
							efficiency and pioneering technology. For pure emotions. And the pure
							AMG experience."
					imgaePositon="left">
					<LazyImage
						src={sedan}
						alt="sedan"
						className="h-auto max-w-full"
						hash="UJEl,N67#SW;|ao0WUf5EL$jXSoLACr?s:oL"
					/>
				</Vehicle>
				<Vehicle
					title="The Mercedes-AMG CLA Coupé"
					description="As luxurious as it is sporty, as exciting as it is emotional: With its sharpened profile, the new Mercedes-AMG CLA Coupé embodies enormous driving pleasure and high-performance spirit. This makes it the ideal newcomer to the world of AMG."
					imgaePositon="right">
					<LazyImage
						src={cla}
						alt="cla"
						className="h-auto max-w-full"
						hash="U15XrzFq4T1g00W;_Nnh00w69t}s=}S}wJEK"
					/>
				</Vehicle>
			</div>
		</section>
	);
}

export default Vehicles;
