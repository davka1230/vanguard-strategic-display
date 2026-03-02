import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const FadeInSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useScrollFadeIn();
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
