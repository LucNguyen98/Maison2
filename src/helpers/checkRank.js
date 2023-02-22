import React from 'react';
import {
  PointPremierIcon,
  PointEliteIcon,
  PointPlatinumIcon,
  PointDiamondIcon
} from 'assets/icons';

export const iconRank = (memberInfo, size) => {
  switch (memberInfo.rank?.name) {
    case 'Member':
      return <PointPremierIcon width={size} height={size} />;
    case 'Elite':
      return <PointEliteIcon width={size} height={size} />;
    case 'Platinum':
      return <PointPlatinumIcon width={size} height={size} />;
    case 'Diamond':
      return <PointDiamondIcon width={size} height={size} />;
    default:
      return <PointPremierIcon width={size} height={size} />;
  }
};

export const getLogoImage = item => {
  return item.find(element => element.type === 'GiftBrand');
};

export const getBackgroundImage = item => {
  return item.find(element => element.type === 'Gift');
};

export const getBackgroundImageDetail = item => {
  return item.find(element => element.type === 'GiftDetail');
};
