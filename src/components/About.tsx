const About = () => {
	return (
		<section id="about" className="py-20 bg-black">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col md:flex-row gap-12 items-start">
					{/* Text Section */}
					<div className="w-full md:w-3/5">
						<h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
							<span className="font-mono text-[#0A85FF] text-xl">01.</span> About Me
							<div className="h-px bg-muted flex-grow hidden md:block"></div>
						</h2>

						<div className="space-y-5 text-muted-foreground leading-relaxed text-xl">
							<p>
								Hello! My name is Efa, and I enjoy building robust backend systems that power modern applications.
								My journey started in 2023 when I created my first API with Node.js — a project that sparked my
								passion for distributed system design and backend applications.
							</p>
							<p>
								Since then, I've worked on backend systems at
								<a href="#" className="text-[#0A85FF] hover:underline"> a startup</a>,
								<a href="#" className="text-[#0A85FF] hover:underline"> a mid-size company</a>, and
								<a href="#" className="text-[#0A85FF] hover:underline"> a large corporation</a>. Currently, I focus on
								building scalable APIs and infrastructure
							</p>

							<p>Technologies I’ve been working with recently:</p>

							<ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm font-mono mt-4">
								{[
									'Go',
									'Node.js',
									'PostgresSQL / MySQL',
									'Redis',
									'GraphQL',
									'Docker / Kubernetes',
									'AWS / Azure',
								].map((tech) => (
									<li key={tech} className="flex items-center">
										<span className="text-[#0A85FF] mr-2 text-2xl">▹</span> {tech}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Image Section */}
					<div className="w-full md:w-2/5 flex justify-center md:justify-end">
						<div className="relative w-full max-w-xs group">
							<div className="relative z-10 border-2 border-primary rounded-md overflow-hidden shadow-lg">
								<img
									src="/image.jpeg"
									alt="Profile"
									className="w-full  transition duration-300 group-hover:scale-105 object-cover"
								/>
							</div>
							<div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-300" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
