import { useEffect, useState } from "react";

const FALLBACK = {
  public_repos: 11,
  followers: 1,
  following: 0,
};

/**
 * Fetches live public stats for a GitHub user directly from the browser.
 * GitHub's REST API is CORS-enabled for unauthenticated GET requests, so this
 * works once the site is actually deployed — falls back to static numbers
 * if the request fails (rate limit, offline, etc.) so the UI never breaks.
 */
export function useGithubStats(username) {
  const [stats, setStats] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("GitHub API request failed");
        const data = await res.json();
        if (!cancelled) {
          setStats({
            public_repos: data.public_repos ?? FALLBACK.public_repos,
            followers: data.followers ?? FALLBACK.followers,
            following: data.following ?? FALLBACK.following,
          });
        }
      } catch {
        if (!cancelled) setStats(FALLBACK);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { stats, loading };
}
