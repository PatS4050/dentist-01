"use client"

import { useState } from "react";

export default function AfspraakPlanner({ times }: { times: string[] }) {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const days = ["Ma", "Di", "Wo", "Do", "Vr"];

    return (
        <>
            <section className="card-container">
                <article className="card">
                    <h2>Kies een datum</h2>
                    <div className="calendar-grid">
                        {days.map((day) => (
                            <span key={day}>{day}</span>
                        ))}

                        {Array.from({ length: 30 }, (item, index) => (
                            <span
                                key={index}
                                className={selectedDate === index + 1 ? "selected" : ""}
                                onClick={() => setSelectedDate(index + 1)}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>
                </article>
                <article className="card calendar">
                    <h2>Kies een tijd</h2>

                    {selectedDate && selectedTime && (
                        <p><strong>U heeft gekozen voor {selectedDate} september om {selectedTime}.</strong></p>
                    )}

                    <div className="time-list">
                        {times.map((time) => (
                            <button
                                key={time}
                                className={selectedTime === time ? "selected" : ""}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </article>
            </section>
        </>
    );
}