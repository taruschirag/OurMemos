// src/pages/QuestionnairePage.js
import React, { useState, useEffect } from 'react';

const categories = [
    {
        key: 'memory',
        name: 'Memory',
        questions: [
            "Remembering a few shopping items without a list.",
            "Remembering things that happened recently (such as recent outings, events in the news).",
            "Recalling conversations a few days later.",
            "Remembering where he/she has placed personal items or objects.",
            "Unknowingly repeating stories and/or questions multiple times.",
            "Remembering the current date or day of the week.",
            "Remembering he/she has already told someone something.",
            "Remembering appointments, meetings, or engagements.",
            "Remembering to do important tasks like pay bills or take medications."
        ]
    },
    {
        key: 'language',
        name: 'Language',
        questions: [
            "Coming up with the right names of commonly used everyday objects (e.g., telephone, toothbrush).",
            "Verbally giving instructions to others.",
            "Finding the exact right words to use in a conversation.",
            "Communicating or expressing ideas in a conversation.",
            "Following a story in a book or on TV.",
            "Understanding the point of what other people are trying to say.",
            "Remembering the meaning of common words.",
            "Describing a program he/she has watched on TV.",
            "Understanding spoken directions or instructions."
        ]
    },
    {
        key: 'visuospatial',
        name: 'Visual-Spatial & Perceptual Abilities',
        questions: [
            "Increased reliance on using electronic navigational aids (like GPS on a smartphone) to find one’s way around town.",
            "Finding his/her car in a parking lot.",
            "Finding the way to a familiar location (e.g., a long-term friend’s home).",
            "Finding his/her way around their own neighborhood.",
            "Finding his/her way around a familiar store or other building.",
            "Finding his/she way around a familiar home.",
            "Use of landmarks in the environment to find locations (e.g., turn left after the grocery store).",
            "Difficulty perceiving distances when driving or driving too close to another vehicle or other object."
        ]
    }
];

export default function QuestionnairePage() {
    const [weights, setWeights] = useState({});
    const [responses, setResponses] = useState({});
    const [scores, setScores] = useState(null);

    useEffect(() => {
        const w = {};
        categories.forEach(cat => {
            cat.questions.forEach((_, i) => {
                w[`${cat.key}-${i}`] = Math.random();
            });
        });
        setWeights(w);
    }, []);

    const handleChange = (catKey, idx, value) => {
        setResponses(prev => ({ ...prev, [`${catKey}-${idx}`]: Number(value) }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const result = {};
        categories.forEach(cat => {
            let sum = 0;
            cat.questions.forEach((_, i) => {
                const key = `${cat.key}-${i}`;
                const resp = responses[key] || 0;
                sum += weights[key] * resp;
            });
            result[cat.name] = sum;
        });
        setScores(result);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Caregiver Questionnaire</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {categories.map(cat => (
                        <div key={cat.key}>
                            <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
                            <div className="space-y-4">
                                {cat.questions.map((q, idx) => (
                                    <div key={idx} className="flex items-center space-x-4">
                                        <label className="w-2/3">{q}</label>
                                        <select
                                            required
                                            className="w-1/3 p-2 border rounded"
                                            onChange={e => handleChange(cat.key, idx, e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            {[1, 2, 3, 4, 9].map(val => (
                                                <option key={val} value={val}>{val}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Calculate Scores
                    </button>
                </form>

                {scores && (
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Results</h2>
                        {Object.entries(scores).map(([name, score]) => (
                            <div key={name} className="flex justify-between py-1">
                                <span>{name}</span>
                                <span className="font-mono">{score.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
