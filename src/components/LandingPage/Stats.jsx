import React from "react";

const PRIMARY = "#fe713e";

const Stats = () => {
    return (
        <section style={{ padding: "80px 0" }}>
            <div className="container">
                <div className="stats-grid" style={{ borderRadius: 32, overflow: "hidden", border: "1px solid var(--border)", background: "white", boxShadow: "var(--shadow-lg)" }}>
                    {[
                        { num: "2,400+", label: "Waitlist signups" },
                        { num: "100+", label: "Cities requested" },
                        { num: "< 15min", label: "Avg delivery time" },
                    ].map(({ num, label }, i) => (
                        <div key={i} style={{
                            padding: "52px 40px",
                            borderRight: i < 2 ? "1px solid var(--border)" : "none",
                            textAlign: "center",
                        }}>
                            <div className="stat-number">{num}</div>
                            <div style={{ color: "var(--muted)", fontSize: "1rem", fontWeight: 500, marginTop: 12 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
