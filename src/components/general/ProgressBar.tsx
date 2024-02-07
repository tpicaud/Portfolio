import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {

    // transparent background for the bar
    backgroundColor: 'transparent',
    // backgroundColor: (() => {
    //   if (typeof localStorage !== 'undefined') {
    //     if (localStorage.getItem("theme") === 'dark') {
    //       return 'white';
    //   } else {
    //     return 'black';
    //   }
    // }
    // })(),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    //backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    backgroundImage: 'linear-gradient(89.81deg, #9845e8 -1.72%, #33d2ff 54.05%, #dd5789 99.78%)',
    },
  }));

type ProgressBarProps = {
  level: number;
};

function ProgressBar(props: ProgressBarProps) {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Augmentez progressivement la valeur jusqu'à la valeur cible (90 dans cet exemple)
      setProgressValue((prevValue) => (prevValue < props.level ? prevValue + 1 : props.level));
    }, 20); // Interval de mise à jour de la barre de progression (en millisecondes)

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau vide en tant que dépendance garantit que cet effet s'exécute une seule fois à l'amorçage

  return (
    <BorderLinearProgress variant="determinate" value={progressValue} />
  );
}

export default ProgressBar;