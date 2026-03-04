import React, { useState } from "react";
import Icon from "./Icon";
import Modal from "./Modal";

const PRIMARY = "#fe713e";
const NAVY = "#272F51";

const HowItWorks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="how-it-works" style={{ padding: "100px 0" }}>
            <div className="container">
                <div style={{ maxWidth: 650, marginBottom: 72 }}>
                    <span className="tag" style={{ marginBottom: 16 }}>How it Works</span>
                    <h2 className="section-heading" style={{ fontSize: "clamp(2.5rem,5vw,3.8rem)", marginTop: 16, marginBottom: 20 }}>
                        Moving an item should be as easy as sending a text.
                    </h2>
                    <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "36px" }}>
                        Three steps. Zero hassle. Fully secure with our unique OTP verification system.
                    </p>
                    <button
                        className="btn-outline"
                        style={{ padding: "16px 32px", borderRadius: "18px", fontSize: "1rem" }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Explore the App Flow
                    </button>
                </div>

                <div className="steps-grid">
                    {[
                        { icon: "confirmation_number", step: "01", title: "Create a Ticket", desc: "Post what needs to go where and set your price. It takes under a minute." },
                        { icon: "person_pin_circle", step: "02", title: "Fetcher Accepts", desc: "A nearby user heading that way picks it up. No detours needed." },
                        { icon: "verified_user", step: "03", title: "OTP-Secured", desc: "Safe handoff with unique codes at both pickup and drop-off points." },
                    ].map(({ icon, step, title, desc }) => (
                        <div key={step} className="step-card">
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                                <div style={{ width: 62, height: 62, background: "rgba(254,113,62,0.1)", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Icon name={icon} size={30} style={{ color: PRIMARY }} />
                                </div>
                                <span className="display" style={{ fontSize: "3.5rem", fontWeight: 900, color: "rgba(254,113,62,0.06)", lineHeight: 1 }}>{step}</span>
                            </div>
                            <h3 className="display" style={{ fontSize: "1.5rem", fontWeight: 700, color: NAVY, marginBottom: 14 }}>{title}</h3>
                            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "1.05rem" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Inside the Fetchitt App"
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    {[
                        {
                            title: "Real-time Tracking",
                            desc: "Watch your item's journey on a live map. Get instant notifications when your Fetcher is nearby.",
                            icon: "map"
                        },
                        {
                            title: "Instant Secure Payments",
                            desc: "Your payment is held in escrow and only released once the OTP handoff is verified by both parties.",
                            icon: "account_balance_wallet"
                        },
                        {
                            title: "In-app Communication",
                            desc: "Chat securely with your Fetcher to coordinate pickup details without sharing your personal phone number.",
                            icon: "chat_bubble"
                        },
                        {
                            title: "Trust & Ratings",
                            desc: "Every Fetcher goes through a verification process. Read reviews and see ratings before accepting a match.",
                            icon: "stars"
                        }
                    ].map((item, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "20px" }}>
                            <div style={{ width: 48, height: 48, background: "#f8f9fa", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Icon name={item.icon} size={24} style={{ color: "#272F51" }} />
                            </div>
                            <div>
                                <h4 className="display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#272F51", marginBottom: "6px" }}>{item.title}</h4>
                                <p style={{ fontSize: "0.95rem" }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </section>
    );
};

export default HowItWorks;
