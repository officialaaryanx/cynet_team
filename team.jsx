import React from "react";
import "./team.css";
import { useGlitchText } from "./hooks/useGlitchText";

// Random team names generator
const teamNames = [
  "CYBER_PHOENIX",
  "NEXUS_VANGUARD",
  "ZERO_DAY_SQUAD",
  "PHANTOM_CORP",
  "DIGITAL_SENTINELS",
  "SYNTHWAVE_ELITE",
  "QUANTUM_FORCE",
  "NEON_ASSASSINS",
  "DATA_DRAGONS",
  "CIRCUIT_BREAKERS",
  "BYTE_NINJAS",
  "FUTURE_FRAGMENT",
  "CODE_MASTERS",
  "GRID_GUARDIANS",
  "STREAM_RUNNERS",
  "PIXEL_WARRIORS",
  "NODE_NOMADS",
  "LOGIC_LORDS",
  "SIGNAL_STRIKERS"
];

const getRandomTeamName = (index) => {
  return teamNames[index % teamNames.length];
};

// Profile data - 19 profiles total
const profiles = [
  // President - 1 (Neon Green)
  { id: 1, name: "ALEX_CHEN", position: "President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  
  // Vice President - 2 (Neon Pink)
  { id: 2, name: "SARAH_WILLIAMS", position: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" },
  { id: 3, name: "MICHAEL_RODRIGUEZ", position: "Vice President", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
  
  // Secretary - 1 (Red)
  { id: 4, name: "EMILY_JOHNSON", position: "Secretary", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
  
  // Director - 5 (Neon Blue)
  { id: 5, name: "JAMES_WILSON", position: "Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
  { id: 6, name: "LISA_ANDERSON", position: "Director", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" },
  { id: 7, name: "DAVID_KIM", position: "Director", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" },
  { id: 8, name: "AMANDA_TAYLOR", position: "Director", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" },
  { id: 9, name: "CHRISTOPHER_LEE", position: "Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  
  // Assistant Director - 10 (Electric Purple)
  { id: 10, name: "JESSICA_MARTINEZ", position: "Assistant Director", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face" },
  { id: 11, name: "DANIEL_BROWN", position: "Assistant Director", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face" },
  { id: 12, name: "ASHLEY_DAVIS", position: "Assistant Director", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face" },
  { id: 13, name: "MATTHEW_GARCIA", position: "Assistant Director", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face" },
  { id: 14, name: "STEPHANIE_MILLER", position: "Assistant Director", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face" },
  { id: 15, name: "ANDREW_JONES", position: "Assistant Director", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face" },
  { id: 16, name: "NICOLE_WHITE", position: "Assistant Director", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face" },
  { id: 17, name: "BRYAN_HARRIS", position: "Assistant Director", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=face" },
  { id: 18, name: "MELISSA_CLARK", position: "Assistant Director", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face" },
  { id: 19, name: "KEVIN_LEWIS", position: "Assistant Director", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face" },
];

// Group profiles by position
const groupByPosition = (profiles) => {
  const groups = {
    "President": [],
    "Vice President": [],
    "Secretary": [],
    "Director": [],
    "Assistant Director": []
  };
  
  profiles.forEach(profile => {
    if (groups[profile.position]) {
      groups[profile.position].push(profile);
    }
  });
  
  return groups;
};

// Position order for display
const positionOrder = ["President", "Vice President", "Secretary", "Director", "Assistant Director"];

function team() {
  const groupedProfiles = groupByPosition(profiles);

  // Get color class based on position
  const getPositionColorClass = (position) => {
    switch (position) {
      case "President":
        return "position-president";
      case "Vice President":
        return "position-vicepresident";
      case "Secretary":
        return "position-secretary";
      case "Director":
        return "position-director";
      case "Assistant Director":
        return "position-assistant";
      default:
        return "position-default";
    }
  };

  return (
    <div className="main-container">
      {positionOrder.map((position) => (
        <div key={position} className="position-section">
          <h2 className={`section-title ${getPositionColorClass(position)}`}>
            {position.toUpperCase()}S
          </h2>
          <div className="profiles-grid">
            {groupedProfiles[position].map((profile, index) => {
              const glitchName = useGlitchText(profile.name);
              
              return (
                <div
                  key={profile.id}
                  className={`profile-card-container ${getPositionColorClass(position)}`}
                >
                  <div className="profile-card">
                    <div className="profile-image-container">
                      <img 
                        src={profile.img} 
                        alt={profile.name} 
                        className="profile-img" 
                      />
                      <div className="profile-image-overlay"></div>
                    </div>
                    
                    <div className="profile-content">
                      <h3 className="profile-name">{glitchName}</h3>
                      <p className="profile-team">{getRandomTeamName(profile.id)}</p>
                      <span className="profile-position">{profile.position.toUpperCase()}</span>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="card-corner card-corner-tl"></div>
                    <div className="card-corner card-corner-tr"></div>
                    <div className="card-corner card-corner-bl"></div>
                    <div className="card-corner card-corner-br"></div>
                  </div>
                  
                  {/* Glitch effect overlay */}
                  <div className="glitch-overlay"></div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default team;

