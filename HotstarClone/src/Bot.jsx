"use client";
import React, { useEffect, useState, useRef } from "react";

// DummyBotUI.jsx
// Single-file React component (works in Next.js / Create React App)
// TailwindCSS required in the project for styling to work.

export default function DummyBotUI() {
  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dummy_bot_messages")) || [
        { id: 1, from: "bot", text: "Hey — I\'m EzyBot. Ask me anything!", time: Date.now() },
      ];
    } catch (e) {
      return [
        { id: 1, from: "bot", text: "Hey — I\'m EzyBot. Ask me anything!", time: Date.now() },
      ];
    }
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [themeDark, setThemeDark] = useState(false);
  const bottomRef = useRef(null);

  // some fun canned responses for the dummy bot
  const canned = [
    "Nice — tell me more!",
    "I\'m a dummy bot but I can pretend to be helpful 😊",
    "Here\'s a code snippet you can copy: console.log('Hello from EzyBot')",
    "If you want persistence, connect me to an API or a DB!",
    "Short answer: yes. Long answer: it depends.",
    "Try asking me to generate a friendly message for a customer.",
  ];

  useEffect(() => {
    localStorage.setItem("dummy_bot_messages", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeDark);
  }, [themeDark]);

  function addMessage(from, text) {
    setMessages((m) => [...m, { id: Date.now() + Math.random(), from, text, time: Date.now() }]);
  }

  // A tiny "AI": picks responses based on keywords or random
  function generateBotResponse(userText) {
    const t = userText.toLowerCase();
    // quick heuristics
    if (t.includes("hello") || t.includes("hi")) return "Hello there! How can I help today?";
    if (t.includes("code") || t.includes("snippet")) return "Sure — what language? I love JavaScript and Python.";
    if (t.includes("help") || t.includes("how")) return "I can suggest steps, code examples, or generate placeholder text. What do you need?";
    if (t.includes("quote") || t.includes("slogan")) return "\"Quality is remembered long after the price is forgotten.\" — EzyShop";
    // fallback to canned random
    return canned[Math.floor(Math.random() * canned.length)];
  }

  async function handleSend(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    addMessage("user", text);
    setInput("");

    // simulate typing + delay
    setIsTyping(true);
    await sleep(700 + Math.random() * 900);
    const botText = generateBotResponse(text);
    await sleep(300 + Math.random() * 500);
    addMessage("bot", botText);
    setIsTyping(false);
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function clearChat() {
    setMessages([{ id: Date.now(), from: "bot", text: "Chat cleared. Ask me something new!", time: Date.now() }]);
    localStorage.removeItem("dummy_bot_messages");
  }

  function exportChat() {
    const blob = new Blob([JSON.stringify(messages, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dummy-bot-chat-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-12">
        {/* Left panel - info */}
        <div className="col-span-12 lg:col-span-4 border-r border-gray-100 dark:border-gray-700 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">EzyBot — Dummy Chat</h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">A minimal, stylish dummy bot for prototyping UI and responses.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setThemeDark((t) => !t)}
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:opacity-90">
                {themeDark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-white dark:from-gray-700 dark:to-gray-800 p-4">
            <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">How EzyBot thinks</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">EzyBot uses simple keyword heuristics and canned replies. Great for UI testing and demos.</p>
          </div>

          <div className="space-y-2">
            <div className="text-xs text-gray-500 dark:text-gray-400">Quick prompts</div>
            <div className="flex flex-wrap gap-2">
              {["Hello", "Give me a code snippet", "Suggest a slogan", "How to connect DB"].map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setInput(p);
                    setTimeout(() => document.getElementById("dummy-chat-input")?.focus(), 50);
                  }}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 hover:opacity-90">{p}</button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="flex gap-3">
              <button onClick={clearChat} className="flex-1 py-2 rounded-md bg-red-50 dark:bg-red-600/20 text-red-600 dark:text-red-300 font-semibold">Clear Chat</button>
              <button onClick={exportChat} className="flex-1 py-2 rounded-md bg-green-50 dark:bg-green-600/20 text-green-700 dark:text-green-300 font-semibold">Export</button>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-6">Tip: This UI uses Tailwind CSS. Drop it into a Next.js page or CRA for a great looking prototype.</div>
        </div>

        {/* Right panel - chat */}
        <div className="col-span-12 lg:col-span-8 p-6 flex flex-col">
          <div className="flex-1 overflow-y-auto scrollbar-hide px-2" style={{ minHeight: 0 }}>
            <div className="space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[78%] px-4 py-2 rounded-2xl ${m.from === "user" ? "bg-gradient-to-r from-customTeal to-green-400 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"}`}>
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    <div className="text-[10px] opacity-60 text-right mt-1">{new Date(m.time).toLocaleTimeString()}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-2xl">
                    <div className="flex gap-1 items-center">
                      <div className="h-2 w-2 rounded-full animate-bounce bg-gray-500 dark:bg-gray-300" />
                      <div className="h-2 w-2 rounded-full animate-bounce bg-gray-500 dark:bg-gray-300 delay-75" />
                      <div className="h-2 w-2 rounded-full animate-bounce bg-gray-500 dark:bg-gray-300 delay-150" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </div>

          <form onSubmit={handleSend} className="mt-4">
            <div className="flex gap-3 items-center">
              <input
                id="dummy-chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message — try: 'Give me a slogan'"
                className="flex-1 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-300 outline-none"
              />
              <button type="submit" className="px-4 py-2 rounded-full bg-indigo-600 hover:opacity-95 text-white font-semibold">Send</button>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
              <div>Messages: {messages.length}</div>
              <div className="flex items-center gap-3">
                <div className="text-gray-400">Mode: <span className="ml-1 font-medium text-gray-600 dark:text-gray-200">Local Dummy</span></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Notes:
// - Add Tailwind CSS with the project (see tailwindcss.com) and optionally add a small custom color for "customTeal".
// - This is intentionally client-only (uses localStorage). To connect real AI, call an API in handleSend.