import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import { ProjectsSection } from "./styles";

export default function HomeProjects(props: { $id: string }) {
	const repos = useGitHubRepos("main");

	return (
		<ProjectsSection id={props.$id}>
			{repos.map((repo) => (
				<p>{repo.name}</p>
			))}
		</ProjectsSection>
	);
}

