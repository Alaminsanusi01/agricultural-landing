"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from "lucide-react"

type WeatherData = {
  location: string
  temperature: number
  condition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy" | "windy"
  humidity: number
  windSpeed: number
  forecast: Array<{
    day: string
    temperature: number
    condition: "sunny" | "cloudy" | "rainy" | "snowy" | "stormy" | "windy"
  }>
}

// Mock weather data
const mockWeatherData: WeatherData = {
  location: "Greenfield, CA",
  temperature: 72,
  condition: "sunny",
  humidity: 45,
  windSpeed: 8,
  forecast: [
    { day: "Mon", temperature: 74, condition: "sunny" },
    { day: "Tue", temperature: 70, condition: "cloudy" },
    { day: "Wed", temperature: 68, condition: "rainy" },
    { day: "Thu", temperature: 72, condition: "cloudy" },
    { day: "Fri", temperature: 75, condition: "sunny" },
  ],
}

const weatherIcons = {
  sunny: <Sun className="h-8 w-8 text-yellow-500" />,
  cloudy: <Cloud className="h-8 w-8 text-gray-500" />,
  rainy: <CloudRain className="h-8 w-8 text-blue-500" />,
  snowy: <CloudSnow className="h-8 w-8 text-blue-200" />,
  stormy: <CloudLightning className="h-8 w-8 text-purple-500" />,
  windy: <Wind className="h-8 w-8 text-teal-500" />,
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch from a weather API here
    // For this example, we'll use mock data with a simulated delay
    const timer = setTimeout(() => {
      setWeather(mockWeatherData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <Card className="w-full max-w-sm mx-auto animate-pulse">
        <CardHeader className="pb-2">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        </CardHeader>
        <CardContent>
          <div className="h-20 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-5 gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!weather) return null

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-green-800">{weather.location} Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {weatherIcons[weather.condition]}
            <div className="ml-4">
              <p className="text-3xl font-bold text-green-800">{weather.temperature}°F</p>
              <p className="text-green-600 capitalize">{weather.condition}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-green-700">Humidity: {weather.humidity}%</p>
            <p className="text-green-700">Wind: {weather.windSpeed} mph</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 text-center">
          {weather.forecast.map((day, index) => (
            <div key={index} className="p-2 rounded-lg hover:bg-green-50 transition-colors">
              <p className="font-medium text-green-800">{day.day}</p>
              <div className="my-1 flex justify-center">{weatherIcons[day.condition]}</div>
              <p className="text-green-700">{day.temperature}°</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
