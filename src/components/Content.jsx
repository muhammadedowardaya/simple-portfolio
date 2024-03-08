import { Route, Routes } from 'react-router-dom';
import Work from '../pages/Work';
import Resume from '../pages/Resume';
import About from '../pages/About';

export default function Content() {
	return (
		<section id="content" className="p-8 overflow-x-hidden">
			<Routes>
				<Route path="/" element={<Work />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</section>
	);
}
