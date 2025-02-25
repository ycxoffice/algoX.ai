import {
  CpuChipIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import cyberGridImage from "./assets/cyber.avif";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white overflow-hidden">
      {/* Cyber grid background */}
      <div className="fixed inset-0 opacity-20 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{
            backgroundImage: `url(${cyberGridImage})`,
          }}
        />{" "}
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="py-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg transform rotate-45"></div>
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AlgoX
              </span>
              <span className="text-gray-400">.ai</span>
            </h1>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Algorithmic Intelligence
            </span>{" "}
            for the Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Next-generation AI algorithms powering quantitative finance,
            predictive analytics, and autonomous systems
          </p>
          <div className="flex justify-center space-x-4">
            <Link
            to={'/companies'}
              href="https://www.b1tcoin.ai/"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/30"
            >
              Launch AI Studio
            </Link>
          </div>
        </section>

        {/* Algorithm Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-16">
          {algorithms.map((algo, idx) => (
            <div
              key={idx}
              className="p-6 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-cyan-400 text-sm font-mono mb-2">
                ALGO-0{idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{algo.name}</h3>
              <p className="text-gray-400 text-sm">{algo.description}</p>
            </div>
          ))}
        </div>

        {/* AI Architecture Diagram */}
        <section className="py-16">
          <div className="bg-black/40 p-8 rounded-3xl border border-cyan-400/20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Neural <span className="text-cyan-400">Algorithm</span> Stack
            </h2>
            <div className="grid md:grid-cols-5 gap-8 text-center">
              <div className="p-6 bg-cyan-400/10 rounded-xl">
                <BeakerIcon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="font-bold">Data Input</div>
              </div>
              <div className="p-6 bg-cyan-400/10 rounded-xl">
                <CpuChipIcon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="font-bold">Preprocessing</div>
              </div>
              <div className="p-6 bg-cyan-400/10 rounded-xl">
                <SparklesIcon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="font-bold">AI Core</div>
              </div>
              <div className="p-6 bg-cyan-400/10 rounded-xl">
                <ChartBarIcon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="font-bold">Optimization</div>
              </div>
              <div className="p-6 bg-cyan-400/10 rounded-xl">
                <ShieldCheckIcon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="font-bold">Output</div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Quantitative</span> Superiority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg rounded-2xl border border-cyan-400/20"
              >
                <div className="text-cyan-400 text-4xl font-bold mb-4">
                  {metric.value}
                </div>
                <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Algorithmic</span> Domains
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-6 bg-black/30 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <useCase.icon className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24 py-8 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} algox.ai - Autonomous Algorithmic
          Intelligence
        </p>
      </footer>
    </div>
  );
}

const algorithms = [
  {
    name: "Quantum ANN",
    description: "Neural networks enhanced with quantum computing principles",
  },
  {
    name: "Temporal CNN",
    description: "Time-series prediction through convolutional layers",
  },
  {
    name: "Eco-GAN",
    description: "Generative adversarial networks for market simulation",
  },
  {
    name: "Reinforcement OPT",
    description: "RL-based portfolio optimization",
  },
];

const metrics = [
  {
    value: "1.7μs",
    title: "Latency",
    description: "Sub-microsecond decision making",
  },
  {
    value: "99.999%",
    title: "Accuracy",
    description: "Prediction confidence levels",
  },
  {
    value: "240%",
    title: "ROI",
    description: "Annualized backtested returns",
  },
];

const useCases = [
  {
    icon: CurrencyDollarIcon,
    title: "Quant Trading",
    description: "AI-driven market prediction engines",
  },
  {
    icon: ChartBarIcon,
    title: "Risk Analysis",
    description: "Real-time portfolio optimization",
  },
  {
    icon: CpuChipIcon,
    title: "IoT Automation",
    description: "Smart system controllers",
  },
  {
    icon: ShieldCheckIcon,
    title: "Cybersecurity",
    description: "Anomaly detection systems",
  },
];
