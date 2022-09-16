import React from 'react';
import './Slider1.scss';

const Slider1 = () => {
  const text = ` 血圧管理プレミアムでは、あなたの現在の状態や、行動目標の記録、達成度などを確認できます。\nどのような機能があるのかを紹介します。`;
  return (
    <div className="slider-1">
      <span>{text}</span>
      <span>※表示データはサンプルです</span>
    </div>
  );
};

export default Slider1;
