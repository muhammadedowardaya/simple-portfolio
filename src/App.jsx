import './styles/App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import SkillTags from './components/SkillTags';
import Profile from './components/Profile';

function App() {
	return (
		<div className="select-none w-full max-w-[800px] mx-auto">
			<header>
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
