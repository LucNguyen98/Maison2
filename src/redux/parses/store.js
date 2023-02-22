export function listStoreParseData(data) {
  const dataParse = data.map(element => ({
    id: element.article.id,
    name: element.article.name,
    code: element.article.code,
    address: element.article.address,
    district: element.article.districtName,
    city: element.article.cityName,
    phone: element.article.phone,
    content: element.article.content,
    avatar: element.article.avatar,
    description: element.article.description,
    operationHours: element.article.operationHours
  }));
  return dataParse;
}
