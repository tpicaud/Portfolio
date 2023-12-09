import LinearProgress, { linearProgressClasses }  from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
      backgroundImage: 'linear-gradient(89.81deg, #9845e8 -1.72%, #33d2ff 54.05%, #dd5789 99.78%)',
    },
  }));

  function Test() {
    const [progressValue, setProgressValue] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Augmentez progressivement la valeur jusqu'à la valeur cible (90 dans cet exemple)
        setProgressValue((prevValue) => (prevValue < 90 ? prevValue + 1 : 90));
      }, 50); // Interval de mise à jour de la barre de progression (en millisecondes)
  
      // Nettoyer l'intervalle lorsque le composant est démonté
      return () => clearInterval(interval);
    }, []); // Le tableau vide en tant que dépendance garantit que cet effet s'exécute une seule fois à l'amorçage
  
    return (
      <div className="text-xl">
        <p>test</p>
        <BorderLinearProgress variant="determinate" value={progressValue} />
      </div>
    );
  }
  
  export default Test;