import React from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const HeroVisual = () => (
    <div className="hero-visual animate-float">
        {/* Orbit rings */}
        <div className="orbit-wrapper" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="orbit-ring" style={{ position: "absolute", width: "75%", height: "75%", border: "1.5px dashed rgba(254,113,62,0.15)", borderRadius: "50%" }} />
            <div className="orbit-ring" style={{ position: "absolute", width: "100%", height: "100%", border: "1.5px dashed rgba(254,113,62,0.08)", borderRadius: "50%" }} />

            {/* Main card */}
            <div className="hero-main-card" style={{
                background: "white",
                borderRadius: 28,
                boxShadow: "0 30px 80px rgba(39,47,81,0.15)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 16, padding: 28,
                border: "1px solid rgba(39,47,81,0.06)",
                position: "relative", zIndex: 2,
            }}>
                {/* Map area */}
                <div style={{ width: "100%", flex: 1, background: "#f0f4ff", borderRadius: 16, position: "relative", overflow: "hidden", minHeight: 120 }}>
                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 200 120">
                        {/* Grid lines */}
                        {[20, 40, 60, 80, 100].map(y => (
                            <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="rgba(39,47,81,0.06)" strokeWidth="1" />
                        ))}
                        {[40, 80, 120, 160].map(x => (
                            <line key={x} x1={x} y1="0" x2={x} y2="120" stroke="rgba(39,47,81,0.06)" strokeWidth="1" />
                        ))}
                        {/* Route */}
                        <path d="M 40 90 Q 100 30 160 70" stroke={PRIMARY} strokeWidth="2.5" fill="none" strokeDasharray="5,4"
                            style={{ animation: "dash-travel 2s linear infinite", strokeDashoffset: 200 }} />
                    </svg>

                    {/* Origin dot */}
                    <div className="map-dot" style={{ left: "20%", bottom: "22%", background: NAVY, color: NAVY }} />
                    {/* Dest dot */}
                    <div className="map-dot" style={{ right: "18%", top: "30%", background: PRIMARY, color: PRIMARY }} />

                    {/* Moving icon */}
                    <div style={{
                        position: "absolute", left: "46%", top: "32%",
                        background: "white",
                        borderRadius: 20, padding: "4px 10px",
                        display: "flex", alignItems: "center", gap: 5,
                        boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                        fontSize: "0.65rem", fontFamily: "'Syne', sans-serif", fontWeight: 700,
                        color: NAVY, textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>
                        <Icon name="delivery_dining" size={14} style={{ color: PRIMARY }} />
                        On the way
                    </div>
                </div>

                {/* ETA bar */}
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    <div style={{ flex: 1, background: "#f8f5f2", borderRadius: 10, padding: "10px 14px" }}>
                        <div style={{ fontSize: "0.6rem", color: "#9ca3af", fontFamily: "'Syne',sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>ETA</div>
                        <div style={{ fontSize: "1rem", fontFamily: "'Syne',sans-serif", fontWeight: 800, color: PRIMARY }}>12 min</div>
                    </div>
                    <div style={{ flex: 1, background: "#f8f5f2", borderRadius: 10, padding: "10px 14px" }}>
                        <div style={{ fontSize: "0.6rem", color: "#9ca3af", fontFamily: "'Syne',sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>Price</div>
                        <div style={{ fontSize: "1rem", fontFamily: "'Syne',sans-serif", fontWeight: 800, color: NAVY }}>$4.50</div>
                    </div>
                    <div style={{ width: 40, height: 40, background: PRIMARY, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon name="check" size={18} style={{ color: "white" }} />
                    </div>
                </div>
            </div>

            {/* Floating badges */}
            <div style={{
                position: "absolute", top: 30, right: -10, zIndex: 3,
                background: "white", borderRadius: 14, padding: "8px 14px",
                boxShadow: "0 8px 24px rgba(39,47,81,0.12)", display: "flex", alignItems: "center", gap: 7,
                border: "1px solid rgba(39,47,81,0.06)",
            }}>
                <Icon name="verified_user" size={16} style={{ color: PRIMARY }} />
                <span style={{ fontSize: "0.7rem", fontFamily: "'Syne',sans-serif", fontWeight: 700, color: NAVY }}>OTP Verified</span>
            </div>
            <div style={{
                position: "absolute", bottom: 40, left: -16, zIndex: 3,
                background: NAVY, borderRadius: 14, padding: "8px 14px",
                boxShadow: "0 8px 24px rgba(39,47,81,0.25)", display: "flex", alignItems: "center", gap: 7,
            }}>
                <div style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%", boxShadow: "0 0 8px #4ade80" }} />
                <span style={{ fontSize: "0.7rem", fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "white" }}>3 Fetchers nearby</span>
            </div>
        </div>
    </div>
);

const Hero = () => {
    const scrollToSignup = () => {
        document.getElementById("get-early-access")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section style={{ padding: "100px 0 80px", background: "var(--bg)", minHeight: "600px", display: "flex", alignItems: "center", overflow: "hidden" }}>
            <div className="container">
                <div className="hero-grid">
                    <div style={{ maxWidth: 650 }}>
                        <div className="animate-slide-up">
                            <span className="tag">
                                <span style={{ width: 7, height: 7, background: PRIMARY, borderRadius: "50%", display: "inline-block" }} />
                                Join Now
                            </span>
                        </div>
                        <h1 className="section-heading animate-slide-up delay-1" style={{ fontSize: "clamp(3rem, 6vw, 4.8rem)", marginTop: 24, marginBottom: 24 }}>
                            Forgot something?<br />
                            <span style={{ color: PRIMARY }}>Don't go back.</span><br />
                            Fetchitt.
                        </h1>
                        <p className="animate-slide-up delay-2" style={{ fontSize: "1.2rem", color: "var(--muted)", maxWidth: 520, marginBottom: 48 }}>
                            The world's first human-powered delivery network. Get anything items delivered by someone already heading that way.
                        </p>
                        <div className="animate-slide-up delay-3" style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 48 }}>
                            <button className="btn-primary" style={{ padding: "18px 40px", borderRadius: 18, fontSize: "1.1rem" }} onClick={scrollToSignup}>
                                Get Early Access
                            </button>
                            <a href="#how-it-works" className="btn-outline" style={{ padding: "18px 36px", borderRadius: 18, fontSize: "1.1rem", textDecoration: "none" }}>
                                See How It Works
                            </a>
                        </div>
                        <div className="animate-slide-up delay-4" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                            <div style={{ display: "flex" }}>
                                {["#e2e8f0", "#cbd5e1", PRIMARY].map((bg, i) => (
                                    <div key={i} style={{
                                        width: 42, height: 42, borderRadius: "50%",
                                        background: bg, border: "2px solid white",
                                        marginLeft: i > 0 ? -12 : 0,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                        zIndex: 3 - i
                                    }}>
                                        {i === 2 ? <span style={{ color: "white", fontSize: 16, fontWeight: 700 }}>+</span>
                                            : <Icon name="person" size={18} style={{ color: "#94a3b8" }} />}
                                    </div>
                                ))}
                            </div>
                            <span style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: 500 }}>Join 2,400+ people on the waitlist</span>
                        </div>
                    </div>
                    <div className="animate-fade-in delay-5" style={{ display: "flex", justifyContent: "center" }}>
                        <HeroVisual />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
