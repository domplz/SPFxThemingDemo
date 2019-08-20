// Sources:
// https://n8d.at/blog/how-to-use-theme-colors-in-spfx-web-parts
// https://docs.microsoft.com/en-us/sharepoint/dev/design/themes-colors

import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "./ThemingTestWebPart.scss";

export interface IThemingTestWebPartProps {
  description: string;
}

export default class ThemingTestWebPart extends BaseClientSideWebPart<IThemingTestWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = /*html*/`
      <div class="themingTest">
        <div class="colorbox themeDarker">
          themeDarker
        </div>
        <div class="colorbox themeDark">
          themeDark
        </div>
        <div class="colorbox themeDarkAlt">
          themeDarkAlt
        </div>
        <div class="colorbox themePrimary">
          themePrimary
        </div>
        <div class="colorbox themeSecondary">
          themeSecondary
        </div>
        <div class="colorbox themeTertiary">
          themeTertiary
        </div>
        <div class="colorbox themeLight">
          themeLight
        </div>
        <div class="colorbox themeLighter">
          themeLighter
        </div>
        <div class="colorbox themeLighterAlt">
          themeLighterAlt
        </div>
      </div>`;
  }
}
