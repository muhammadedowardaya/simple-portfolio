import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
	const location = useLocation();

	const currentPath = (targetPath) => {
		const isActive = location.pathname === targetPath.toString();
		return isActive
			? 'border-b-2 border-b-green-500 text-green-500 font-semibold'
			: 'hover:border-b-slate-500 font-medium';
	};

	return (
		<nav className="navigation mt-8 pt-8">
			<ul className="flex gap-8 justify-center border-b pb-2 flex-wrap text-[12px]">
				<li>
					<Link to="/" className={`hover:border-b-2 py-2 ${currentPath('/')}`}>
						WORK
					</Link>
				</li>
				<li>
					<Link
						to="/resume"
						className={`hover:border-b-2 py-2 ${currentPath('/resume')}`}
					>
						RESUME
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						className={`hover:border-b-2 py-2 ${currentPath('/about')}`}
					>
						ABOUT
					</Link>
				</li>
			</ul>
		</nav>
	);
}
