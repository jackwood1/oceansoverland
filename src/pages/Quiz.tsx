import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Home,
  Award,
  Timer,
  Target,
  Heart,
  Info,
  ArrowRight
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
  accuracy: number;
  badges: string[];
}

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "Which marine animal is known as the 'panda of the sea'?",
      options: ["Dolphin", "Vaquita", "Sea Turtle", "Whale"],
      correctAnswer: 1,
      explanation: "The Vaquita is called the 'panda of the sea' due to its distinctive black markings around the eyes and mouth.",
      category: "Marine",
      difficulty: "Easy"
    },
    {
      id: 2,
      question: "What is the primary threat to Sumatran Orangutans?",
      options: ["Climate Change", "Deforestation", "Pollution", "Overfishing"],
      correctAnswer: 1,
      explanation: "Deforestation for palm oil plantations and logging is the primary threat to Sumatran Orangutans, destroying their habitat.",
      category: "Terrestrial",
      difficulty: "Medium"
    },
    {
      id: 3,
      question: "How many California Condors remain in the wild?",
      options: ["Less than 100", "About 500", "Over 1000", "Around 2000"],
      correctAnswer: 1,
      explanation: "There are approximately 500 California Condors in the wild, making them one of the rarest birds in the world.",
      category: "Avian",
      difficulty: "Hard"
    },
    {
      id: 4,
      question: "Which endangered animal is only found in Ujung Kulon National Park?",
      options: ["Sumatran Tiger", "Javan Rhino", "Bornean Elephant", "Malayan Tapir"],
      correctAnswer: 1,
      explanation: "The Javan Rhino is only found in Ujung Kulon National Park in Java, Indonesia, with less than 75 individuals remaining.",
      category: "Terrestrial",
      difficulty: "Medium"
    },
    {
      id: 5,
      question: "What makes Hawksbill Sea Turtles crucial for coral reef health?",
      options: ["They eat coral", "They clean the reef", "They eat sponges", "They provide nutrients"],
      correctAnswer: 2,
      explanation: "Hawksbill Sea Turtles eat sponges, which helps maintain coral reef health by preventing sponges from overgrowing corals.",
      category: "Marine",
      difficulty: "Hard"
    },
    {
      id: 6,
      question: "Which big cat is adapted to cold climates and found in the Russian Far East?",
      options: ["Siberian Tiger", "Amur Leopard", "Snow Leopard", "Lynx"],
      correctAnswer: 1,
      explanation: "The Amur Leopard is adapted to cold climates and is found in the Russian Far East, with only about 100 individuals remaining.",
      category: "Terrestrial",
      difficulty: "Medium"
    },
    {
      id: 7,
      question: "What percentage of DNA do humans share with orangutans?",
      options: ["85%", "90%", "95%", "97%"],
      correctAnswer: 3,
      explanation: "Humans share approximately 97% of their DNA with orangutans, making them one of our closest relatives.",
      category: "Terrestrial",
      difficulty: "Easy"
    },
    {
      id: 8,
      question: "Which conservation method has been most successful for California Condors?",
      options: ["Habitat Protection", "Captive Breeding", "Anti-Poaching Laws", "Public Education"],
      correctAnswer: 1,
      explanation: "Captive breeding programs have been the most successful conservation method for California Condors, helping increase their population from just 22 birds in 1982.",
      category: "Avian",
      difficulty: "Medium"
    }
  ];

  useEffect(() => {
    if (!startTime) {
      setStartTime(Date.now());
    }
  }, [startTime]);

  useEffect(() => {
    if (showResults && startTime) {
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [showResults, startTime]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      setStreak(streak + 1);
      setMaxStreak(Math.max(maxStreak, streak + 1));
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setStartTime(null);
    setTimeTaken(0);
    setStreak(0);
    setMaxStreak(0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getBadges = (result: QuizResult): string[] => {
    const badges: string[] = [];
    
    if (result.accuracy >= 90) badges.push('Perfect Score');
    if (result.accuracy >= 80) badges.push('Wildlife Expert');
    if (result.accuracy >= 70) badges.push('Conservation Champion');
    if (result.timeTaken < 120) badges.push('Speed Demon');
    if (maxStreak >= 5) badges.push('Streak Master');
    if (result.correctAnswers >= 6) badges.push('Knowledge Seeker');
    
    return badges;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showResults) {
    const result: QuizResult = {
      score,
      totalQuestions: questions.length,
      correctAnswers: score,
      timeTaken,
      accuracy: Math.round((score / questions.length) * 100),
      badges: []
    };
    
    result.badges = getBadges(result);

    return (
      <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-forest-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Trophy Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Results */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiz Complete!</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card text-center">
                <div className="text-3xl font-bold text-ocean-600 mb-2">{result.score}/{result.totalQuestions}</div>
                <div className="text-gray-600">Correct Answers</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">{result.accuracy}%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-coral-600 mb-2">{result.timeTaken}s</div>
                <div className="text-gray-600">Time Taken</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{maxStreak}</div>
                <div className="text-gray-600">Best Streak</div>
              </div>
            </div>

            {/* Badges */}
            {result.badges.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Badges Earned</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {result.badges.map((badge, index) => (
                    <motion.div
                      key={badge}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-ocean-500 to-forest-500 text-white rounded-full"
                    >
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">{badge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestartQuiz}
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Take Quiz Again</span>
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="btn-secondary text-lg px-8 py-3 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-forest-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Wildlife Conservation Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Test your knowledge about endangered animals and earn conservation badges!
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-700">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="text-lg font-semibold text-ocean-600">
                Score: {score}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-ocean-500 to-forest-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Stats */}
            <div className="flex justify-between text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Timer className="w-4 h-4" />
                <span>Time: {startTime ? Math.floor((Date.now() - startTime) / 1000) : 0}s</span>
              </span>
              <span className="flex items-center space-x-1">
                <Target className="w-4 h-4" />
                <span>Streak: {streak}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="card mb-8"
        >
          {/* Question Header */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty}
              </span>
              <span className="text-sm text-gray-500">{currentQuestion.category}</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  isAnswered
                    ? index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50 text-red-800'
                      : 'border-gray-200 bg-gray-50 text-gray-600'
                    : selectedAnswer === index
                    ? 'border-ocean-500 bg-ocean-50 text-ocean-800'
                    : 'border-gray-200 hover:border-ocean-300 hover:bg-ocean-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {isAnswered && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="font-medium">{option}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
                  <p className="text-blue-700">{currentQuestion.explanation}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              <button
                onClick={handleNextQuestion}
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2 mx-auto"
              >
                <span>
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-forest-500 to-ocean-500 text-white rounded-xl p-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Heart className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Conservation Tip</h3>
            </div>
            <p className="text-forest-100">
              Every correct answer helps raise awareness about endangered species. 
              Share your knowledge with others to make an even bigger impact!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
