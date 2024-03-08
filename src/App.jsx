import './styles/App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import SkillTags from './components/SkillTags';
import Profile from './components/Profile';

function App() {
	return (
		<div className="w-full max-w-[800px] mx-auto">
			<header className="px-2 sm:px-6 overflow-hidden">
				<Profile />
				<SkillTags />
			</header>
			<main>
				<Navigation />
				<Content />
			</main>
		</div>
	);
}

export default App;
