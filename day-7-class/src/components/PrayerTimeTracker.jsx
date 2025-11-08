import { useState, useEffect } from "react";
import './PrayerTimeTracker.css';

function PrayerTimeTracker() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const [nextPrayer, setNextPrayer] = useState('');

    // Prayer times (24-hour format)
    const prayerTimes = [
        { name: 'Fajr', hour: 5, minutes: 30 },
        { name: 'Zuhr', hour: 13, minutes: 0 },
        { name: 'Asr', hour: 16, minutes: 30 },
        { name: 'Maghrib', hour: 18, minutes: 45 },
        { name: 'Isha', hour: 20, minutes: 0 }
    ];

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Update greeting based on time
    useEffect(() => {
        const hour = currentTime.getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting('Good Morning! ☀️');
        }else if (hour >= 12 && hour < 16) {
            setGreeting('Good Afternoon! 🌤️');
        } else if (hour >= 16 && hour < 20) {
            setGreeting('Good Evening! 🌅');
        } else {
            setGreeting('Good Night! 🌙');
        }
    }, [currentTime]);

    // Calculate next prayer
    useEffect(() => {
        const now = currentTime;
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        // Find next prayer
        for (let prayer of prayerTimes) {
            const prayerMinutes = prayer.hour * 60 + prayer.minutes;
            if (prayerMinutes > currentMinutes) {
                const diff = prayerMinutes - currentMinutes;
                const hours = Math.floor(diff / 60);
                const minutes = diff % 60;
                setNextPrayer(`${prayer.name} in ${hours}h ${minutes}m`);
                return;
            }
        }
        setNextPrayer('Fajr tomorrow');
    }, [currentTime]);

    // Log when component mounts
    useEffect(() => {
        console.log('Prayer Time Tracker mounted');
        
        return () => {
        console.log('Prayer Time Tracker unmounted');
        };
    }, []);

    return (
        <div className="prayer-tracker">
            <h1>🕌 Prayer Time Tracker</h1>

            <div className="current-time">
                <h2>{currentTime.toLocaleTimeString('en-NG')}</h2>
                <p>{currentTime.toLocaleDateString('en-NG', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</p>
            </div>

            <div className="greeting">
                <h3>{greeting}</h3>
            </div>

            <div className="next-prayer">
                <p>Next Prayer: {nextPrayer}</p>
            </div>

            <div className="prayer-times">
                <h3>Today's Prayer Times</h3>
                {prayerTimes.map((prayer, index) => (
                    <div key={index} className="prayer-time">
                        <span>{prayer.name}</span>
                        <span>{`${prayer.hour}:${prayer.minutes.toString().padStart(2, '0')}`}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrayerTimeTracker;