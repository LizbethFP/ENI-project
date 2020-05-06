export class ProductModel {
  name: string;
  scientificName: string;
  commercialName: string;
  presentation: string;
  packing?: string;
  whole?: string;
  sizes: string;
  catchArea: string; // NOTE: REMOVE THIS INFO AND PLACE IT IN A GLOBAL AREA
  season: string;
  meat: string;
  extraInfo?: string;

  constructor(
    name: string,
    scientificName: string,
    commercialName: string,
    presentation: string,
    packing: string,
    whole: string,
    sizes: string,
    catchArea: string,
    season: string,
    meat: string,
    extraInfo?: string,
  ) {
    this.name = name;
    this.scientificName = scientificName;
    this.commercialName = commercialName;
    this.presentation = presentation;
    this.packing = packing;
    this.whole = whole;
    this.sizes = sizes;
    this.catchArea = catchArea;
    this.season = season;
    this.meat = meat;
    this.extraInfo = extraInfo;
  }
}
