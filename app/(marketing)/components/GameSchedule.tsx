'use client';

import { useState } from 'react';
import Image from 'next/image';
import { teams } from '../teams/team-data';

interface Game {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  weather: {
    temp: string;
    condition: string;
    icon: string;
  };
  ticketUrl?: string;
}

const mockGames: Game[] = [
  {
    id: '1',
    date: '2024-01-08',
    time: '18:35',
    homeTeam: 'ctbc-brothers',
    awayTeam: 'fubon-guardians',
    stadium: '台中インターコンチネンタル球場',
    weather: {
      temp: '22°C',
      condition: '晴れ',
      icon: '☀️'
    },
    ticketUrl: 'https://www.cpbl.com.tw/tickets'
  },
  {
    id: '2',
    date: '2024-01-08',
    time: '18:35',
    homeTeam: 'rakuten-monkeys',
    awayTeam: 'uni-lions',
    stadium: '桃園国際野球場',
    weather: {
      temp: '20°C',
      condition: '曇り',
      icon: '☁️'
    },
    ticketUrl: 'https://www.cpbl.com.tw/tickets'
  },
  {
    id: '3',
    date: '2024-01-09',
    time: '18:35',
    homeTeam: 'wei-chuan-dragons',
    awayTeam: 'tsg-hawks',
    stadium: '天母野球場',
    weather: {
      temp: '19°C',
      condition: '小雨',
      icon: '🌧️'
    },
    ticketUrl: 'https://www.cpbl.com.tw/tickets'
  }
];

export default function GameSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const getTeamById = (id: string) => teams.find(team => team.id === id);
  
  const filteredGames = mockGames.filter(game => game.date === selectedDate);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          今日の試合
        </h2>
        
        <div className="mb-6 text-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => {
              const homeTeam = getTeamById(game.homeTeam);
              const awayTeam = getTeamById(game.awayTeam);
              
              if (!homeTeam || !awayTeam) return null;

              return (
                <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">{game.time}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{game.weather.icon}</span>
                        <span className="text-sm text-gray-600">{game.weather.temp}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <Image
                            src={awayTeam.logo}
                            alt={awayTeam.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="font-semibold">{awayTeam.name}</p>
                        <p className="text-sm text-gray-500">ビジター</p>
                      </div>
                      
                      <div className="text-2xl font-bold text-gray-400 px-4">VS</div>
                      
                      <div className="text-center flex-1">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <Image
                            src={homeTeam.logo}
                            alt={homeTeam.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="font-semibold">{homeTeam.name}</p>
                        <p className="text-sm text-gray-500">ホーム</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-semibold">球場:</span> {game.stadium}
                      </p>
                      
                      {game.ticketUrl && (
                        <a
                          href={game.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          チケット購入
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">この日の試合はありません</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}