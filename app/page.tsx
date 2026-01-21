import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <main className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Welcome to Quizzer
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
          Test your knowledge with our interactive quizzes!
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/quiz"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors"
          >
            Start Quiz
          </Link>
          
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Challenge yourself with multiple-choice questions</p>
            <p className="mt-2">Track your score and see how you perform!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
