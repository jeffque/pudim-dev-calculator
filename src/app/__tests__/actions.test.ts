import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getGithubStats } from '../actions'

// Mock global fetch
global.fetch = vi.fn()

describe('getGithubStats', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches user data successfully', async () => {
    const mockUserData = {
      login: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      followers: 100,
      public_repos: 50,
    }

    const mockReposData = [
      {
        stargazers_count: 10,
        language: 'JavaScript',
        size: 100,
      },
      {
        stargazers_count: 5,
        language: 'TypeScript',
        size: 200,
      },
    ]

    vi.mocked(fetch)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUserData,
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

    const result = await getGithubStats('testuser')

    expect(result).toMatchObject({
      username: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      followers: 100,
      public_repos: 50,
      total_stars: 15,
    })
    expect(result.languages).toBeDefined()
  })

  it('returns error when user is not found', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 404,
    } as Response)

    const result = await getGithubStats('nonexistentuser')

    expect(result).toEqual({
      error: 'User not found',
    })
  })

  it('returns error when API fails', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'))

    const result = await getGithubStats('testuser')

    expect(result).toEqual({
      error: 'An unexpected error occurred',
    })
  })

  it('calculates language percentages correctly', async () => {
    const mockUserData = {
      login: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      followers: 100,
      public_repos: 4,
    }

    const mockReposData = [
      { stargazers_count: 10, language: 'JavaScript', size: 400 },
      { stargazers_count: 5, language: 'JavaScript', size: 300 },
      { stargazers_count: 3, language: 'TypeScript', size: 200 },
      { stargazers_count: 2, language: 'Python', size: 100 },
      { stargazers_count: 1, language: null, size: 50 },
    ]

    vi.mocked(fetch)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUserData,
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

    const result = await getGithubStats('testuser')

    expect(result.languages).toBeDefined()
    if (result.languages) {
      // Languages are counted by repo count, not size
      // 2 JavaScript repos = 50%, 1 TypeScript = 25%, 1 Python = 25%
      expect(result.languages.find(l => l.name === 'JavaScript')?.percentage).toBeCloseTo(50, 0)
      expect(result.languages.find(l => l.name === 'TypeScript')?.percentage).toBeCloseTo(25, 0)
      expect(result.languages.find(l => l.name === 'Python')?.percentage).toBeCloseTo(25, 0)
    }
  })

  it('filters out repos without language', async () => {
    const mockUserData = {
      login: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      followers: 100,
      public_repos: 2,
    }

    const mockReposData = [
      { stargazers_count: 10, language: 'JavaScript', size: 100 },
      { stargazers_count: 5, language: null, size: 50 },
    ]

    vi.mocked(fetch)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUserData,
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

    const result = await getGithubStats('testuser')

    expect(result.languages).toBeDefined()
    if (result.languages) {
      expect(result.languages).toHaveLength(1)
      expect(result.languages[0].name).toBe('JavaScript')
    }
  })

  it('calculates total stars correctly', async () => {
    const mockUserData = {
      login: 'testuser',
      avatar_url: 'https://example.com/avatar.jpg',
      created_at: '2012-01-01T00:00:00Z',
      followers: 100,
      public_repos: 3,
    }

    const mockReposData = [
      { stargazers_count: 100, language: 'JavaScript', size: 100 },
      { stargazers_count: 50, language: 'TypeScript', size: 100 },
      { stargazers_count: 25, language: 'Python', size: 100 },
    ]

    vi.mocked(fetch)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUserData,
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockReposData,
      } as Response)

    const result = await getGithubStats('testuser')

    expect(result.total_stars).toBe(175)
  })
})

