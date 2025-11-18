import { describe, it, expect } from 'vitest'
import { GET } from '../route'

describe('Health Check API', () => {
  it('returns status ok', async () => {
    const response = await GET()
    const data = await response.json()
    
    expect(data.status).toBe('ok')
  })

  it('includes timestamp in response', async () => {
    const response = await GET()
    const data = await response.json()
    
    expect(data.timestamp).toBeDefined()
    expect(typeof data.timestamp).toBe('string')
    
    // Check if timestamp is a valid ISO date
    const timestamp = new Date(data.timestamp)
    expect(timestamp.toString()).not.toBe('Invalid Date')
  })

  it('includes service name', async () => {
    const response = await GET()
    const data = await response.json()
    
    expect(data.service).toBe('pudim.dev')
  })

  it('returns 200 status code', async () => {
    const response = await GET()
    
    expect(response.status).toBe(200)
  })

  it('returns JSON content type', async () => {
    const response = await GET()
    const contentType = response.headers.get('content-type')
    
    expect(contentType).toContain('application/json')
  })

  it('returns consistent structure', async () => {
    const response = await GET()
    const data = await response.json()
    
    expect(Object.keys(data)).toEqual(['status', 'timestamp', 'service'])
  })
})

