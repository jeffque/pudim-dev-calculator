import { describe, it, expect } from 'vitest'
import { cn } from '../utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500')
    expect(result).toContain('text-red-500')
    expect(result).toContain('bg-blue-500')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toContain('base-class')
    expect(result).toContain('active-class')
  })

  it('filters out falsy values', () => {
    const result = cn('text-red-500', false, null, undefined, 'bg-blue-500')
    expect(result).toContain('text-red-500')
    expect(result).toContain('bg-blue-500')
    expect(result).not.toContain('false')
    expect(result).not.toContain('null')
    expect(result).not.toContain('undefined')
  })

  it('handles tailwind class conflicts correctly', () => {
    // Later classes should override earlier ones
    const result = cn('p-4', 'p-8')
    expect(result).toContain('p-8')
    expect(result).not.toContain('p-4')
  })

  it('merges multiple class sources', () => {
    const result = cn(
      'flex items-center',
      'justify-between',
      { 'text-red-500': true, 'text-blue-500': false },
      ['gap-4', 'p-4']
    )
    expect(result).toContain('flex')
    expect(result).toContain('items-center')
    expect(result).toContain('justify-between')
    expect(result).toContain('text-red-500')
    expect(result).not.toContain('text-blue-500')
    expect(result).toContain('gap-4')
    expect(result).toContain('p-4')
  })

  it('returns empty string when no classes provided', () => {
    const result = cn()
    expect(result).toBe('')
  })
})

