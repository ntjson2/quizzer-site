"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/questions";
import { Question } from "@/types/quiz";
import Link from "next/link";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const question: Question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasAnswered = selectedAnswer !== null;

  const handleAnswerClick = (answerIndex: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
    setShowExplanation(false);
  };

  const getButtonClass = (index: number) => {
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
    
    if (!hasAnswered) {
      return baseClass + "border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 dark:border-gray-600 dark:hover:border-indigo-400 dark:hover:bg-gray-700";
    }
    
    if (index === question.correctAnswer) {
      return baseClass + "border-green-500 bg-green-50 dark:bg-green-900/20";
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return baseClass + "border-red-500 bg-red-50 dark:bg-red-900/20";
    }
    
    return baseClass + "border-gray-300 dark:border-gray-600 opacity-50";
  };

  if (showResult) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Quiz Complete! 🎉
          </h1>
          
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 mb-6">
            <div className="text-center">
              <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {percentage}%
              </p>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                You scored {score} out of {quizQuestions.length}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            {percentage >= 80 && (
              <p className="text-center text-lg text-green-600 dark:text-green-400">
                Excellent work! You really know your stuff! 🌟
              </p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-center text-lg text-blue-600 dark:text-blue-400">
                Good job! Keep up the great work! 👍
              </p>
            )}
            {percentage < 60 && (
              <p className="text-center text-lg text-orange-600 dark:text-orange-400">
                Keep practicing! You'll do better next time! 💪
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <button
              onClick={handleRestart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {question.question}
        </h2>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={hasAnswered}
              className={getButtonClass(index)}
            >
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
            </button>
          ))}
        </div>

        {showExplanation && question.explanation && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
            <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
              Explanation:
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {question.explanation}
            </p>
          </div>
        )}

        {hasAnswered && (
          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {isLastQuestion ? "See Results" : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}
