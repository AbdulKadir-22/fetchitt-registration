import React from "react";

const SafetyGuidelines = () => {
    return (
        <div className="legal-container">
            <h1 className="display">Safety Guidelines</h1>
            <p>Last updated: June 2024</p>

            <h2>1. The OTP System</h2>
            <p>Fetchitt uses a unique One-Time Password (OTP) for every pickup and delivery. Never hand over an item or release a payment without verifying the code with the other party.</p>

            <h2>2. Sender Safety</h2>
            <p>Only send items that are legal and safe to transport. We recommend not sending high-value items like cash, jewelry, or dangerous goods.</p>

            <h2>3. Fetcher Safety</h2>
            <p>Fetchers should always review the item category and instructions before accepting. Always pick up or drop off in well-lit, public locations.</p>

            <h2>4. Reporting Issues</h2>
            <p>Found something suspicious or had a bad experience? Reach out immediately at akadir22086@gmail.com.</p>
        </div>
    );
};

export default SafetyGuidelines;
