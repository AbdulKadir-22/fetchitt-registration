import React from "react";
import Icon from "./Icon";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const UserTypes = () => {
    return (
        <section style={{ background: "#f8f5f2", padding: "100px 0" }}>
            <div className="container">
                <div className="user-types-grid">
                    {/* Senders */}
                    <div id="senders" style={{
                        background: "white", borderRadius: 32, padding: "56px",
                        boxShadow: "var(--shadow-lg)",
                        border: "1px solid var(--border)",
                        display: "flex", flexDirection: "column"
                    }}>
                        <span className="tag" style={{ marginBottom: 24 }}>For Senders</span>
                        <h2 className="display" style={{ fontSize: "2.4rem", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
                            Send items without the logistics nightmare.
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48, flex: 1 }}>
                            {[
                                { t: "Lower costs than traditional couriers", icon: "payments" },
                                { t: "Real-time GPS tracking of your item", icon: "map" },
                                { t: "Fully insured deliveries up to $500", icon: "verified_user" }
                            ].map(({ t, icon }) => (
                                <div key={t} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                    <div style={{ width: 28, height: 28, background: "rgba(34,197,94,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e", flexShrink: 0 }}>
                                        <Icon name="check" size={16} />
                                    </div>
                                    <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: "1.05rem" }}>{t}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary" style={{ width: "100%", padding: "18px", borderRadius: 18, fontSize: "1.1rem" }}>
                            Get Started as Sender
                        </button>
                    </div>

                    {/* Fetchers */}
                    <div id="fetchers" style={{
                        background: NAVY, borderRadius: 32, padding: "56px",
                        boxShadow: "0 30px 60px rgba(39,47,81,0.25)",
                        position: "relative", overflow: "hidden",
                        display: "flex", flexDirection: "column"
                    }}>
                        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, background: "rgba(254,113,62,0.15)", borderRadius: "50%", filter: "blur(60px)" }} />
                        <span className="tag" style={{ marginBottom: 24, background: "rgba(254,113,62,0.2)", position: "relative", zIndex: 1 }}>For Fetchers</span>
                        <h2 className="display" style={{ fontSize: "2.4rem", fontWeight: 800, color: "white", marginBottom: 32, lineHeight: 1.2, position: "relative", zIndex: 1 }}>
                            Earn money on your daily commute.
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48, position: "relative", zIndex: 1, flex: 1 }}>
                            {[
                                { t: "Extra income for trips you're already making", icon: "trending_up" },
                                { t: "Choose only the items you want to carry", icon: "fact_check" },
                                { t: "Instant payouts after successful delivery", icon: "bolt" }
                            ].map(({ t, icon }) => (
                                <div key={t} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                    <div style={{ width: 28, height: 28, background: "rgba(74,222,128,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ade80", flexShrink: 0 }}>
                                        <Icon name="check" size={16} />
                                    </div>
                                    <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 500, fontSize: "1.05rem" }}>{t}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-primary" style={{ width: "100%", padding: "18px", borderRadius: 18, fontSize: "1.1rem", position: "relative", zIndex: 1 }}>
                            Get Started as Fetcher
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserTypes;
