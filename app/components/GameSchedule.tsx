'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { teams } from '../(marketing)/teams/team-data';

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
  status?: 'scheduled' | 'live' | 'finished' | 'postponed';
  score?: {
    home: number;
    away: number;
  };
}

// 1ヶ月分のモックデータを生成
const generateMockGames = (): Game[] => {
  const games: Game[] = [];
  const today = new Date();
  const teams_ids = ['ctbc-brothers', 'fubon-guardians', 'rakuten-monkeys', 'uni-lions', 'wei-chuan-dragons', 'tsg-hawks'];
  const stadiums = [
    '台中インターコンチネンタル球場',
    '桃園国際野球場',
    '天母野球場',
    '台南市立野球場',
    '新北市立新莊棒球場',
    '澄清湖野球場'
  ];
  const weatherConditions = [
    { temp: '22°C', condition: '晴れ', icon: '☀️' },
    { temp: '20°C', condition: '曇り', icon: '☁️' },
    { temp: '19°C', condition: '小雨', icon: '🌧️' },
    { temp: '24°C', condition: '晴れ', icon: '☀️' },
    { temp: '21°C', condition: '曇り', icon: '☁️' }
  ];

  // 前後15日分のデータを生成
  for (let i = -15; i <= 15; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    
    // 週末は試合を増やす
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const gameCount = isWeekend ? 3 : Math.random() > 0.5 ? 2 : 1;
    
    // その日の試合を生成
    const usedTeams = new Set<string>();
    
    for (let j = 0; j < gameCount && usedTeams.size < teams_ids.length - 1; j++) {
      let homeTeam, awayTeam;
      
      // 使用されていないチームを選択
      do {
        homeTeam = teams_ids[Math.floor(Math.random() * teams_ids.length)];
      } while (usedTeams.has(homeTeam));
      usedTeams.add(homeTeam);
      
      do {
        awayTeam = teams_ids[Math.floor(Math.random() * teams_ids.length)];
      } while (usedTeams.has(awayTeam));
      usedTeams.add(awayTeam);
      
      const game: Game = {
        id: `${dateStr}-${j}`,
        date: dateStr,
        time: isWeekend ? (j === 0 ? '14:00' : '18:35') : '18:35',
        homeTeam,
        awayTeam,
        stadium: stadiums[teams_ids.indexOf(homeTeam)],
        weather: weatherConditions[Math.floor(Math.random() * weatherConditions.length)],
        ticketUrl: 'https://www.cpbl.com.tw/tickets'
      };
      
      // 過去の試合にはスコアを追加
      if (i < 0) {
        game.status = 'finished';
        game.score = {
          home: Math.floor(Math.random() * 10),
          away: Math.floor(Math.random() * 10)
        };
      } else if (i === 0) {
        // 今日の試合はランダムでライブまたは予定
        game.status = Math.random() > 0.5 ? 'live' : 'scheduled';
        if (game.status === 'live') {
          game.score = {
            home: Math.floor(Math.random() * 8),
            away: Math.floor(Math.random() * 8)
          };
        }
      } else {
        game.status = 'scheduled';
      }
      
      games.push(game);
    }
  }
  
  return games;
};

const mockGames = generateMockGames();

export default function GameSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  
  const getTeamById = (id: string) => teams.find(team => team.id === id);
  
  // 週間表示用の日付配列を生成
  const weekDates = useMemo(() => {
    const dates = [];
    const startDate = new Date(selectedDate);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // 週の始まり（日曜日）
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  }, [selectedDate]);
  
  // 月間表示用の日付配列を生成
  const monthDates = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    
    // 月の最初の週の空白を埋める
    const startPadding = firstDay.getDay();
    for (let i = startPadding - 1; i >= 0; i--) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() - i - 1);
      dates.push({ date, isCurrentMonth: false });
    }
    
    // 月の日付
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    
    // 月の最後の週の空白を埋める
    const endPadding = 6 - lastDay.getDay();
    for (let i = 1; i <= endPadding; i++) {
      const date = new Date(lastDay);
      date.setDate(date.getDate() + i);
      dates.push({ date, isCurrentMonth: false });
    }
    
    return dates;
  }, [selectedDate]);
  
  const getGamesForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return mockGames.filter(game => game.date === dateStr);
  };
  
  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return { month, day, weekday };
  };
  
  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  const changeWeek = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + (direction * 7));
    setSelectedDate(newDate);
  };
  
  const changeMonth = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          試合予定
        </h2>
        
        {/* 表示モード切替 */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('week')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              viewMode === 'week'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            週間表示
          </button>
          <button
            onClick={() => setViewMode('month')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              viewMode === 'month'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            月間表示
          </button>
        </div>

        {viewMode === 'week' ? (
          /* 週間表示 */
          <div>
            <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
              <button
                onClick={() => changeWeek(-1)}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl">←</span>
              </button>
              <h3 className="text-xl font-semibold">
                {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
              </h3>
              <button
                onClick={() => changeWeek(1)}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-2 max-w-6xl mx-auto">
              {weekDates.map((date) => {
                const { month, day, weekday } = formatDate(date);
                const games = getGamesForDate(date);
                const isCurrentDay = isToday(date);
                
                return (
                  <div
                    key={date.toISOString()}
                    className={`bg-white rounded-lg p-4 ${
                      isCurrentDay ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div className="text-center mb-3">
                      <p className="text-sm text-gray-500">{weekday}</p>
                      <p className="font-bold text-lg">{month}/{day}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {games.length > 0 ? (
                        games.map((game) => {
                          const homeTeam = getTeamById(game.homeTeam);
                          const awayTeam = getTeamById(game.awayTeam);
                          if (!homeTeam || !awayTeam) return null;
                          
                          return (
                            <div
                              key={game.id}
                              className="bg-gray-50 rounded p-2 text-xs cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                              <p className="font-semibold">{game.time}</p>
                              <p className="truncate">
                                {awayTeam.name} vs {homeTeam.name}
                              </p>
                              {game.status === 'finished' && game.score && (
                                <p className="text-gray-600">
                                  {game.score.away} - {game.score.home}
                                </p>
                              )}
                              {game.status === 'live' && (
                                <p className="text-red-600 font-semibold">試合中</p>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-xs text-gray-400 text-center">試合なし</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* 月間表示 */
          <div>
            <div className="flex justify-between items-center mb-6 max-w-4xl mx-auto">
              <button
                onClick={() => changeMonth(-1)}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl">←</span>
              </button>
              <h3 className="text-xl font-semibold">
                {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
              </h3>
              <button
                onClick={() => changeMonth(1)}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 max-w-4xl mx-auto">
              {/* 曜日ヘッダー */}
              {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                <div key={day} className="text-center font-semibold p-2">
                  {day}
                </div>
              ))}
              
              {/* 日付とゲーム */}
              {monthDates.map(({ date, isCurrentMonth }) => {
                const games = getGamesForDate(date);
                const isCurrentDay = isToday(date);
                
                return (
                  <div
                    key={date.toISOString()}
                    className={`bg-white border border-gray-200 p-2 min-h-[80px] ${
                      !isCurrentMonth ? 'opacity-50' : ''
                    } ${isCurrentDay ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <p className="text-sm font-semibold mb-1">{date.getDate()}</p>
                    {games.length > 0 && (
                      <div className="space-y-1">
                        {games.slice(0, 2).map((game, index) => {
                          const homeTeam = getTeamById(game.homeTeam);
                          const awayTeam = getTeamById(game.awayTeam);
                          if (!homeTeam || !awayTeam) return null;
                          
                          return (
                            <div
                              key={game.id}
                              className="text-xs bg-blue-100 rounded px-1 py-0.5 cursor-pointer hover:bg-blue-200"
                              title={`${game.time} ${awayTeam.name} vs ${homeTeam.name}`}
                            >
                              {game.time}
                            </div>
                          );
                        })}
                        {games.length > 2 && (
                          <p className="text-xs text-gray-500">他{games.length - 2}試合</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* 今日へ移動ボタン */}
        <div className="text-center mt-8">
          <button
            onClick={() => setSelectedDate(new Date())}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            今日へ移動
          </button>
        </div>
      </div>
    </section>
  );
}