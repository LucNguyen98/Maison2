export function listVoucherParseData(data) {
  const dataParse = data.map(element => ({
    id: element._id,
    name: element.name,
    code: element.code
  }));
  return dataParse;
}

export const wishlistParse = data => {
  if (data.length > 0) {
    return data.map(el => ({
      imageLink: el?.imageLink,
      relatedGifts: el?.relatedGifts,
      giftInfor: el?.wishListItem
    }));
  }
  return [];
};
