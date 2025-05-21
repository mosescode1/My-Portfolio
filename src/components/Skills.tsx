// mport { cn } from "@/lib/utils";

interface SkillCategoryProps {
	title: string;
	skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
	<div className='mb-8'>
		<h3 className='text-lg font-semibold mb-4 text-foreground'>{title}</h3>
		<div className='flex flex-wrap gap-2'>
			{skills.map((skill) => (
				<span
					key={skill}
					className='bg-secondary bg-gray-800 px-3 py-1.5 rounded-md text-sm font-mono'>
					{skill}
				</span>
			))}
		</div>
	</div>
);

const Skills = () => {
	const skillCategories = [
		{
			title: 'Programming Languages',
			skills: ['Go', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
		},
		{
			title: 'Frameworks & Libraries',
			skills: [
				'Express',
				'Fiber',
				'Echo',
				'FastAPI',
				'Express.js',
				'Hibernate',
				'JUnit',
				'Go Kit',
			],
		},
		{
			title: 'Databases',
			skills: [
				'PostgreSQL',
				'MySQL',
				'MongoDB',
				'Redis',
				'Elasticsearch',
				'Cassandra',
			],
		},
		{
			title: 'DevOps & Infrastructure',
			skills: [
				'Docker',
				'Kubernetes',
				'AWS',
				'GCP',
				'Azure',
				'Terraform',
				'CI/CD',
				'Prometheus',
				'Grafana',
			],
		},
		{
			title: 'Other Technologies',
			skills: [
				'REST APIs',
				'GraphQL',
				'gRPC',
				'RabbitMQ',
				'Kafka',
				'WebSockets',
				'Microservices',
			],
		},
	];

	return (
		<section id='skills' className='py-20 bg-secondary/30'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3'>
					<span className='font-mono text-primary text-xl text-[#0e32a2]'>02.</span> Skills
					<div className='h-px bg-muted flex-grow ml-4 hidden md:block'></div>
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{skillCategories.map((category, index) => (
						<SkillCategory
							key={index}
							title={category.title}
							skills={category.skills}
						/>
					))}
				</div>

				<div className='mt-16'>
					<h3 className='text-lg font-semibold mb-6 text-foreground'>
						Skill Level
					</h3>
					<div className='space-y-6'>
						{[
							{ name: 'Backend Development', level: 95 },
							{ name: 'Database Design', level: 90 },
							{ name: 'API Development', level: 92 },
							{ name: 'System Architecture', level: 85 },
							{ name: 'DevOps', level: 80 },
						].map((skill) => (
							<div key={skill.name}>
								<div className='flex justify-between mb-2'>
									<span className='text-sm font-medium text-foreground'>
										{skill.name}
									</span>
									<span className='text-sm font-mono text-[#0e32a2]'>
										{skill.level}%
									</span>
								</div>
								<div className='w-full bg-secondary rounded-full h-2.5'>
									<div
										className='bg-[#0e32a2] h-2.5 rounded-full'
										style={{ width: `${skill.level}%` }}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
