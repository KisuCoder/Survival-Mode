import {
  ArrowRight,
  Sparkles
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../css/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={11} />
              AI-Powered Price Prediction
            </div>
            <h1>
              Find Your
              <br />
              Property's
              <br />
              <span>Estimated Value</span>
            </h1>
            <p className="hero-description">
              Explore properties and use AI-powered price prediction
              to estimate real estate values with confidence.
            </p>
            <div className="hero-buttons">
              <Link
                to="/predictor"
                className="primary-button"
              >
                <Sparkles size={13} />
                Predict Property Price
              </Link>
              <Link
                to="/properties"
                className="secondary-button"
              >
                Browse Properties
                <ArrowRight size={13} />
              </Link>
            </div>
            <div className="statistics">
              <div className="stat">
                <strong>10+</strong>
                <span>Listed Properties</span>
              </div>
              <div className="stat">
                <strong>87%</strong>
                <span>Prediction Accuracy</span>
              </div>
              <div className="stat">
                <strong>10K+</strong>
                <span>Users Served</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
              alt="Real estate property"
              className="hero-image"
            />
            <div className="estimate-card">
              <span>AI Estimated Value</span>
              <strong>₱6,850,000</strong>
              <small>
                Model confidence: 87%
              </small>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;