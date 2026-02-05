"use client";

import { MotionWrapper } from "@/components/common/motion-wrapper";
import { GradientText } from "@/components/animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightWord?: string;
  className?: string;
  delay?: number;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  highlightWord,
  className = "",
  delay = 0.1 
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <GradientText>{highlightWord}</GradientText>
        {parts[1]}
      </>
    );
  };

  return (
    <MotionWrapper 
      variant="fadeUp" 
      delay={delay}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </MotionWrapper>
  );
}