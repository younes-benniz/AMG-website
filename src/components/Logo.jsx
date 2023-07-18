import logo from "../assets/mercedes/logo.svg";
import amg from "../assets/amg.svg";

function Logo() {
	return (
		<div className="lg:w-32">
			<a className="flex items-center text-teal-600 dark:text-teal-300" href="/">
				<img className="h-full lg:w-12 w-10" src={logo} alt="AMG" />
				<img className="h-full lg:w-full w-36 -ml-3" src={amg} alt="amg" />
			</a>
		</div>
	);
}

export default Logo;
