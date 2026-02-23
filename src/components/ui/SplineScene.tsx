import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
}

export default function SplineScene({ scene }: SplineSceneProps) {
  return <Spline scene={scene} />;
}
