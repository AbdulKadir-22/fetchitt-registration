import React from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const ProblemSection = () => {
    return (
        <section style={{ background: NAVY, padding: "100px 0" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <h2 className="section-heading" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "white", marginBottom: 20 }}>
                        You've been here before.
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto" }}>
                        These moments happen every day. Now there's a fix.
                    </p>
                </div>
                <div className="problem-grid">
                    {[
                        { icon: "electrical_services", title: "Left your charger?", desc: "Halfway to the airport and your laptop cable is still on the desk." },
                        { icon: "medication", title: "Parents need medicine?", desc: "They can't go out and you're stuck at the office. Someone nearby can help." },
                        { icon: "key", title: "Locked out?", desc: "Spare keys are with a friend across town. Don't waste hours in traffic." },
                        { icon: "shopping_bag", title: "Left the gym bag?", desc: "Workout starts in 30 minutes. Let a Fetcher bring it to you." },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className="problem-card">
                            <div style={{ width: 56, height: 56, background: "rgba(254,113,62,0.15)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                                <Icon name={icon} size={28} style={{ color: PRIMARY }} />
                            </div>
                            <h3 className="display" style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: 12 }}>{title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "1rem" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
