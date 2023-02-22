export const formatNumber = x => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return 0;
  }
};

export const formatNumberPoint = x => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  } else {
    return 0;
  }
};

export const convertMissionPercent = progress => {
  if (!progress) {
    return 0;
  }
  const index = progress.indexOf('/');

  const actual = parseInt(progress.slice(0, index));
  const target = parseInt(progress.slice(index + 1));
  if (actual > target) {
    return 1;
  }

  return actual / target;
};

export const convertChallengePercent = missions => {
  if (!missions) return 0;
  let total = missions.reduce((acc, cur) => {
    let index = cur.progress.indexOf('/');
    let actual = parseInt(cur.progress.slice(0, index));
    let percent = actual > cur.target ? 1 : actual === 0 ? 0 : actual / cur.target;

    return (acc = acc + percent);
  }, 0);
  return Math.floor((total / missions.length) * 100);
};
