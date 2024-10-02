import { CommonModule, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '@global/models/product-card.interface';
import { SafePipe } from 'safe-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CommonModule, SafePipe],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  itemAdded: boolean = false;
  heartItem = `<svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_208_2289)">
                    <rect x="8" width="32" height="32" rx="16" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.577 11.7642C24.2546 12.0736 23.7454 12.0736 23.423 11.7642L22.846 11.2105C22.1707 10.5624 21.2583 10.1667 20.25 10.1667C18.1789 10.1667 16.5 11.8456 16.5 13.9167C16.5 15.9022 17.5748 17.5417 19.1265 18.8888C20.6794 20.237 22.5362 21.1312 23.6455 21.5876C23.8775 21.683 24.1225 21.683 24.3545 21.5876C25.4638 21.1312 27.3206 20.237 28.8735 18.8888C30.4252 17.5417 31.5 15.9022 31.5 13.9167C31.5 11.8456 29.8211 10.1667 27.75 10.1667C26.7417 10.1667 25.8294 10.5624 25.154 11.2105L24.577 11.7642ZM24 10.008C23.0268 9.074 21.7054 8.5 20.25 8.5C17.2585 8.5 14.8333 10.9251 14.8333 13.9167C14.8333 19.2235 20.642 22.1542 23.0115 23.1289C23.6496 23.3914 24.3504 23.3914 24.9885 23.1289C27.3581 22.1542 33.1667 19.2235 33.1667 13.9167C33.1667 10.9251 30.7416 8.5 27.75 8.5C26.2946 8.5 24.9733 9.074 24 10.008Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_208_2289"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="8"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_208_2289"
                      />
                      <feOffset dy="8" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.12 0"
                      />
                      <feBlend
                        mode="multiply"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_208_2289"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_208_2289"
                        result="shape"
                      />
                    </filter>
                  </defs>
              </svg>`;
  // product card item
  card = input<ProductCard>();

  addedToWishList() {
    this.itemAdded = !this.itemAdded;
    console.log(`Item adedd State: `, this.itemAdded);
  }
}