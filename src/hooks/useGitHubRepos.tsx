import { useMemo } from "react";

import { useFetchData } from "@/hooks/useFetchData";
import githubConfigs from "@/configs/github.json";

export interface Repo {
	description: string;
	html_url: string;
	language: string;
	name: string;
	stargazers_count: number;
	svn_url: string;
	topics: string[];
}

// 100 is the max value
const REPOS_URL = `https://api.github.com/users/${githubConfigs.user}/repos?per_page=100`;

type RepoTopic = "normal" | "main";

export function useGitHubRepos(mode: RepoTopic = "normal"): Repo[] {
	const { data: allRepos } = useFetchData<Repo[]>(REPOS_URL);

	const filterTopic = mode == "normal" ? githubConfigs.topics.normal : githubConfigs.topics.main;
	const filteredRepos = useMemo(
		() => (allRepos == null ? [] : allRepos.filter((repo) => repo.topics.some((topic) => topic == filterTopic))),
		[allRepos, filterTopic]
	);

	return filteredRepos;
}

