'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getGithubStats } from "@/app/actions"
import { Loader2, Star, Users, GitFork } from "lucide-react"

type PudimRank = {
  rank: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

function calculatePudimScore(stats: any): { score: number; rank: PudimRank } {
  // Simplified scoring algorithm inspired by github-readme-stats
  // A = 100, B = 50, C = 20 (weights)
  
  const score = (stats.followers * 0.5) + (stats.total_stars * 2) + (stats.public_repos * 1);
  
  let rank: PudimRank;
  
  if (score > 1000) {
    rank = { rank: "S+", title: "Legendary Flan", description: "The texture is perfect, the caramel is divine. You are a coding god!", emoji: "🍮✨", color: "text-amber-500" };
  } else if (score > 500) {
    rank = { rank: "S", title: "Master Pudim", description: "A delicious result. Michelin star worthy.", emoji: "🍮", color: "text-yellow-600" };
  } else if (score > 200) {
    rank = { rank: "A", title: "Tasty Pudding", description: "Everyone wants a slice. Great job!", emoji: "😋", color: "text-orange-500" };
  } else if (score > 100) {
    rank = { rank: "B", title: "Sweet Treat", description: "Solid and dependable. A good dessert.", emoji: "🍬", color: "text-orange-400" };
  } else if (score > 50) {
    rank = { rank: "C", title: "Homemade", description: "Made with love, but room for improvement.", emoji: "🏠", color: "text-yellow-700" };
  } else {
    rank = { rank: "D", title: "Underbaked", description: "Needs a bit more time in the oven.", emoji: "🥚", color: "text-zinc-500" };
  }

  return { score, rank };
}

// Map popular languages to colors (simplified map)
const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#00ADD8",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Swift: "#ffac45",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  Kotlin: "#F18E33",
  Dart: "#F04C33",
  Lua: "#005fa0",
  Solidity: "#aa6746",
};

export function PudimScore() {
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!username.trim()) return

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const data = await getGithubStats(username)
      if (data.error) {
        setError(data.error)
      } else {
        const analysis = calculatePudimScore(data)
        setResult({ stats: data, ...analysis })
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto space-y-3">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input 
          className="flex-1 bg-background/50 backdrop-blur-sm" 
          placeholder="GitHub Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Calculate"}
        </Button>
      </form>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-100 dark:bg-red-900/20 rounded-lg">
          {error}
        </div>
      )}

      {result && (
        <Card className="border-2 border-primary/20 overflow-hidden relative shadow-md hover:shadow-lg transition-shadow">
           <div className="absolute -top-8 -right-4 p-4 opacity-10 text-8xl select-none pointer-events-none">
            {result.rank.emoji}
           </div>
          <CardHeader className="px-3 pt-2 pb-0">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <img src={result.stats.avatar_url} alt={result.stats.username} className="w-20 h-20 rounded-full border-2 border-primary" />
                <div className="text-left"> 
                  <CardTitle className="text-base leading-tight">{result.stats.username}</CardTitle>
                  <CardDescription className="text-[10px] leading-tight">Member since {new Date(result.stats.created_at).getFullYear()}</CardDescription>
                </div>
              </div>
              {/* Rank Display on the Right */}
              <div className="text-right pl-1">
                <div className={`text-2xl font-extrabold leading-none ${result.rank.color}`}>
                  {result.rank.rank}
                </div>
                <div className={`text-[10px] font-bold whitespace-nowrap leading-tight ${result.rank.color}`}>
                  {result.rank.title}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 pb-0 pt-0 space-y-0 !mt-0">
            {/* Stats Row */}
            <div className="flex justify-between items-center text-center">
              <div className="flex flex-col items-center px-1">
                <Star className="h-3.5 w-3.5 text-yellow-500 mb-0.5" />
                <span className="font-bold text-sm leading-tight">{result.stats.total_stars}</span>
                <span className="text-[9px] text-muted-foreground uppercase leading-tight">Stars</span>
              </div>
              <div className="flex flex-col items-center px-1">
                <Users className="h-3.5 w-3.5 text-blue-500 mb-0.5" />
                <span className="font-bold text-sm leading-tight">{result.stats.followers}</span>
                <span className="text-[9px] text-muted-foreground uppercase leading-tight">Followers</span>
              </div>
              <div className="flex flex-col items-center px-1">
                <GitFork className="h-3.5 w-3.5 text-purple-500 mb-0.5" />
                <span className="font-bold text-sm leading-tight">{result.stats.public_repos}</span>
                <span className="text-[9px] text-muted-foreground uppercase leading-tight">Repos</span>
              </div>
            </div>

            {/* Languages / Flavors Section */}
            {result.stats.languages && result.stats.languages.length > 0 && (
              <div className="space-y-1.5 mt-3">
                 <h3 className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider text-center">Pudim Flavors</h3>
                 
                 {/* Progress Bar */}
                 <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    {result.stats.languages.map((lang: any) => (
                      <div 
                        key={lang.name}
                        style={{ width: `${lang.percentage}%`, backgroundColor: languageColors[lang.name] || '#ccc' }}
                        title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
                        className="h-full"
                      />
                    ))}
                 </div>

                 {/* Legend */}
                 <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5">
                    {result.stats.languages.map((lang: any) => (
                      <div key={lang.name} className="flex items-center gap-0.5">
                        <span 
                          className="h-1.5 w-1.5 rounded-full" 
                          style={{ backgroundColor: languageColors[lang.name] || '#ccc' }}
                        />
                        <span className="text-[9px] text-muted-foreground">
                          {lang.name} <span className="opacity-50">{Math.round(lang.percentage)}%</span>
                        </span>
                      </div>
                    ))}
                 </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
