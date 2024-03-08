export default function Resume() {
	return (
		<div id="resume">
			<div className="sm:bg-gray-200 min-h-screen flex items-center justify-center sm:p-8">
				<div className="bg-white shadow-md p-8 rounded-md">
					{/* <h1 className="text-3xl font-bold mb-6">My Resume</h1> */}
					<div className="max-w-2xl mx-auto p-4">
						<h1 className="text-4xl font-bold mb-4">John Doe</h1>
						<p>Email: john.doe@example.com</p>
						<p>Phone: (123) 456-7890</p>

						<h2 className="text-2xl font-bold mt-4 mb-2">Education</h2>
						<p>Bachelor of Science in Computer Science</p>
						<p>University of Example, Graduated May 2019</p>

						<h2 className="text-2xl font-bold mt-4 mb-2">Experience</h2>
						<p>Software Developer</p>
						<p>XYZ Company, June 2019 - Present</p>
						<ul className="list-disc pl-6">
							<li>Developing web applications using React and Node.js</li>
							<li>Collaborating with cross-functional teams</li>
						</ul>

						<h2 className="text-2xl font-bold mt-4 mb-2">Skills</h2>
						<ul className="list-disc pl-6">
							<li>JavaScript (React, Node.js)</li>
							<li>HTML, CSS, Sass</li>
							<li>Git, GitHub</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
