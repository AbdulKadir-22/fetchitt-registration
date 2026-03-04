import React from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const Testimonials = () => {
    return (
        <section style={{ background: "#f1ede9", padding: "80px 40px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <h2 className="display" style={{ fontSize: "2rem", fontWeight: 800, color: NAVY, textAlign: "center", marginBottom: 48 }}>
                    Early users love it.
                </h2>
                <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {[
                        { q: "It's a game changer for when you're in a rush and forget the little things.", name: "Sarah M.", role: "Early User" },
                        { q: "Paid for my morning coffee just by dropping off a package at the office next to mine.", name: "David K.", role: "Beta Fetcher" },
                        { q: "The OTP feature gives me peace of mind knowing my items are truly secure.", name: "Elena R.", role: "Early User" },
                    ].map(({ q, name, role }) => (
                        <div key={name} className="testimonial-card">
                            <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                                {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={16} style={{ color: PRIMARY }} />)}
                            </div>
                            <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 20, fontStyle: "italic" }}>"{q}"</p>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${PRIMARY}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Icon name="person" size={18} style={{ color: PRIMARY }} />
                                </div>
                                <div>
                                    <div className="display" style={{ fontWeight: 700, fontSize: "0.875rem", color: NAVY }}>{name}</div>
                                    <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
