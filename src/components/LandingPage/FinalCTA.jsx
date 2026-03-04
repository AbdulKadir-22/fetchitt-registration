import React, { useState } from "react";
import Icon from "./Icon";
import { registerForEarlyAccess } from "../../services/api";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const FinalCTA = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async () => {
        if (!email) return;
        setLoading(true);
        setError("");
        try {
            await registerForEarlyAccess(email);
            setSubmitted(true);
        } catch (err) {
            setError(err.message || "Failed to join the waitlist. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="get-early-access" style={{ padding: "80px 0 100px" }}>
            <div className="container">
                <div style={{
                    background: NAVY,
                    borderRadius: 40, padding: "100px 60px",
                    textAlign: "center", position: "relative", overflow: "hidden",
                    boxShadow: "0 40px 100px rgba(39,47,81,0.3)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "rgba(254,113,62,0.25)", borderRadius: "50%", filter: "blur(100px)" }} />
                    <div style={{ position: "absolute", bottom: -80, left: -60, width: 300, height: 300, background: "rgba(254,113,62,0.12)", borderRadius: "50%", filter: "blur(80px)" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2 className="section-heading" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", color: "white", marginBottom: 24 }}>
                            Be part of the first<br />human-powered delivery network.
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 48, fontSize: "1.15rem", maxWidth: 600, margin: "0 auto 48px" }}>
                            Join 2,400+ people and 100+ cities waiting for Fetchitt. No spam, just progress.
                        </p>
                        {submitted ? (
                            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 16, padding: "20px 32px", color: "#4ade80", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>
                                <Icon name="check_circle" size={24} style={{ color: "#4ade80" }} />
                                You're on the list! We'll be in touch soon.
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
                                <div className="cta-row" style={{ display: "flex", gap: 16, maxWidth: 600, margin: "0 auto", width: "100%" }}>
                                    <input
                                        type="email"
                                        className="input-field"
                                        placeholder="Enter your email address"
                                        value={email}
                                        disabled={loading}
                                        onChange={e => setEmail(e.target.value)}
                                        onKeyDown={e => e.key === "Enter" && email && handleSignup()}
                                    />
                                    <button
                                        className="btn-primary"
                                        style={{ padding: "0 40px", borderRadius: 18, fontSize: "1.1rem", whiteSpace: "nowrap", height: 62, flexShrink: 0, opacity: loading ? 0.7 : 1 }}
                                        onClick={handleSignup}
                                        disabled={loading}
                                    >
                                        {loading ? "Joining..." : "Reserve My Spot"}
                                    </button>
                                </div>
                                {error && <div style={{ color: "#fca5a5", fontSize: "0.95rem", fontWeight: 500, marginTop: 8 }}>{error}</div>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
