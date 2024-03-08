import ListItem from '../components/ListItem';

export default function Work() {
	return (
		<div id="work">
			<div className="max-w-2xl mx-auto p-4">
				<ul className="list-disc flex flex-col gap-4">
					<ListItem
						name="Dobha Printing"
						description="Membuat desain kemasan parfume"
					/>
					<ListItem
						name="Dobha Printing"
						description="Membuat desain kemasan parfume"
					/>
				</ul>
			</div>
		</div>
	);
}
