import { useMemo } from "react";

import { FetchStatus, useFetchData } from "@/hooks/useFetchData";
import githubConfigs from "@/configs/github.json";

export interface Repo {
	description: string;
	homepage: string;
	html_url: string;
	language: string;
	name: string;
	topics: string[];
}

const REPOS_URL = `https://api.github.com/users/${githubConfigs.user}/repos?per_page=100`;

type RepoTopic = "normal" | "main";

export const githubService = {
	Repos: (mode: RepoTopic = "normal"): [Repo[], FetchStatus] => {
		const { data: allRepos, status: statusRequest } = useFetchData<Repo[]>(REPOS_URL);

		const filterTopic = mode == "normal" ? githubConfigs.topics.normal : githubConfigs.topics.main;
		const filteredRepos = useMemo(
			() => (allRepos == null ? [] : allRepos.filter((repo) => repo.topics.some((topic) => topic == filterTopic))),
			[allRepos, filterTopic]
		);

		return [filteredRepos, statusRequest];
	},
};

