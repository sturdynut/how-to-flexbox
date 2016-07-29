import { Component, OnInit } from '@angular/core';
import { FlexContainerComponent } from '../flex-container/flex-container.component';
import { FlexItemService } from '../flex-item.service';
import { FlexItem } from '../flex-item/flex-item.model';

@Component({
  moduleId: module.id,
  selector: 'app-slides',
  templateUrl: 'slides.component.html',
  styleUrls: ['slides.component.css'],
  directives: [FlexContainerComponent],
  providers: [FlexItemService]
})
export class SlidesComponent implements OnInit {
  activeTab: number;
  flexItems: FlexItem[];
  groupedSlides: any[];
  slideIndex: number;
  display: string;
  justifyContent: string;
  alignItems: string;
  flexFlow: string;
  alignContent: string;
  flexDirection: string;
  flexWrap: string;

  constructor(private _flexItemService: FlexItemService) { }

  ngOnInit() {
    this.slideIndex = 0;
    this.activeTab = 0;
    this._flexItemService.getFlexItems()
      .then(flexItems => this.flexItems = flexItems.slice(0, 3));

    this.groupedSlides = this.getGroupedSlides();
  }

  setActiveTab(index) {
    this.activeTab = index;
  }

  isActiveTab(index) {
    return index === this.activeTab;
  }

  onKey(event) {
    if (event.keyCode === 37) {
      this.prev();
    }

    if (event.keyCode === 39) {
      this.next();
    }
  }

  reset() {
    this.slideIndex = 0;
    this.currentSlide().fn();
  }

  prev() {
    this.slideIndex =
      this.slideIndex === 0 ? this.slides.length - 1 : this.slideIndex - 1;

    this.currentSlide().fn();
  }

  next() {
    this.slideIndex =
      this.slideIndex + 1 === this.slides.length ? 0 : this.slideIndex + 1;

    this.currentSlide().fn();
  }

  currentSlide() {
    return this.slides[this.slideIndex];
  }

  isActiveSlide(slide) {
    return this.slides[this.slideIndex].message === slide.message;
  }

  goToSlide(slide) {
    this.slideIndex =
      this.slides.findIndex(s => { return s.message === slide.message });

    this.currentSlide().fn();
  }

  goToSection(groupSection) {
    this.slideIndex =
      this.slides.findIndex(slide => { return slide.section === groupSection.section });

    this.currentSlide().fn();
  }

  getGroupedSlides() {
    let groupedSlides = [];
    let nextIndex = 0;

    this.slides.forEach((slide, index) => {
      const section = slide.section;

      let groupedSlide = groupedSlides.filter(group => { return group.section === section })[0];

      if (!groupedSlide) {
        groupedSlide = {
          section: slide.section,
          slides: [slide],
          index: ++nextIndex
        };
        groupedSlides.push(groupedSlide);
      }
      else {
        groupedSlide.slides.push(slide);
      }
    });

    return groupedSlides;
  }

  resetStyles() {
    this.slides[0].fn();
    this.slides[1].fn();

    this.resetFlexItems()
  }

  resetFlexItems() {
    this.flexItems.forEach((flexItem) => {
      flexItem.alignSelf = 'auto';
      flexItem.flexGrow = 0;
      flexItem.flexShrink = 1;
      flexItem.flexBasis = 'auto';
      flexItem.order = 0;
      flexItem.display = 'inline-flex';
      flexItem.visibility = 'visible';
      flexItem.marginTop = '0';
      flexItem.marginRight = '0';
      flexItem.marginBottom = '0';
      flexItem.marginLeft = '0';
    });
  }

  slides: any[] = [
    {
      section: 'Display',
      message: `display: block;




          `,
      fn: () => {
        this.display = 'block';
        this.justifyContent = null;
        this.alignItems = null;
        this.flexFlow = null;
        this.alignContent = null;
        this.flexDirection = null;
        this.flexWrap = null;
        this.flexItems[1].name = '.flex-item-2';
        this.resetFlexItems();
      }
    },
    {
      section: 'Display',
      message: `display: flex;




          `,
      fn: () => {
        this.display = 'flex';
      }
    },
    {
      section: 'Justify Content',
      message: `display: flex;
  justify-content: flex-end;



           `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-end';
      }
    },
    {
      section: 'Justify Content',
      message: `display: flex;
  justify-content: center;



          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'center';
      }
    },
    {
      section: 'Justify Content',
      message: `display: flex;
  justify-content: space-between;



          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'space-between';
      }
    },
    {
      section: 'Justify Content',
      message: `display: flex;
  justify-content: space-around;



          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'space-around';
      }
    },
    {
      section: 'Justify Content',
      message: `display: flex;
  justify-content: flex-start;



          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
      }
    },
    {
      section: 'Align Items',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;


          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
      }
    },
    {
      section: 'Align Items',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-end;


          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-end';
      }
    },
    {
      section: 'Align Items',
      message: `display: flex;
  justify-content: flex-start;
  align-items: center;


          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'center';
      }
    },
    {
      section: 'Align Items',
      message: `display: flex;
  justify-content: flex-start;
  align-items: baseline;


          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'baseline';
      }
    },
    {
      section: 'Align Items',
      message: `display: flex;
  justify-content: flex-start;
  align-items: stretch;


          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'stretch';
      }
    },
    {
      section: 'Flex Direction',
      message: `display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;

          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'stretch';
        this.flexDirection = 'row';
      }
    },
    {
      section: 'Flex Direction',
      message: `display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row-reverse;

          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'stretch';
        this.flexDirection = 'row-reverse';
      }
    },
    {
      section: 'Flex Direction',
      message: `display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;

          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'stretch';
        this.flexDirection = 'column';
      }
    },
    {
      section: 'Flex Direction',
      message: `display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column-reverse;

          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'stretch';
        this.flexDirection = 'column-reverse';
        this.flexItems[1].name = '.flex-item-2';
      }
    },
    {
      section: 'Flex Wrap',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'nowrap';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Flex Wrap',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Flex Wrap',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap-reverse;
          `,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap-reverse';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Align Content',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: stretch;`,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap';
        this.alignContent = 'stretch';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Align Content',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;`,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap';
        this.alignContent = 'center';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Align Content',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: baseline;`,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap';
        this.alignContent = 'baseline';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Align Content',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;`,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap';
        this.alignContent = 'flex-start';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Align Content',
      message: `display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-end;`,
      fn: () => {
        this.display = 'flex';
        this.justifyContent = 'flex-start';
        this.alignItems = 'flex-start';
        this.flexDirection = 'row';
        this.flexWrap = 'wrap';
        this.alignContent = 'flex-end';
        this.flexItems[1].name = `
              Flex Item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such and
              flex item 2 and such.
            `;
      }
    },
    {
      section: 'Align Self',
      flexItem: true,
      message: `align-self: center;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].alignSelf = 'center';
      }
    },
    {
      section: 'Align Self',
      flexItem: true,
      message: `align-self: flex-start;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].alignSelf = 'flex-start';
      }
    },
    {
      section: 'Align Self',
      flexItem: true,
      message: `align-self: flex-end;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].alignSelf = 'flex-end';
      }
    },
    {
      section: 'Align Self',
      flexItem: true,
      message: `align-self: stretch;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].alignSelf = 'stretch';
      }
    },
    {
      section: 'Align Self',
      flexItem: true,
      message: `align-self: baseline;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].alignSelf = 'baseline';
      }
    },
    {
      section: 'Order',
      flexItem: true,
      message: `order: 1;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].order = 1;
      }
    },
    {
      section: 'Order',
      flexItem: true,
      message: `order: -1;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].order = -1;
      }
    },
    {
      section: 'Order',
      flexItem: true,
      message: `order: 100;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].order = 100;
      }
    },
    {
      section: 'Order',
      flexItem: true,
      message: `order: 0;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].order = 0;
      }
    },
    {
      section: 'Flex Grow',
      flexItem: true,
      message: `flex-grow: 0;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexGrow = 0;
      }
    },
    {
      section: 'Flex Grow',
      flexItem: true,
      message: `flex-grow: 1;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexGrow = 1;
      }
    },
    {
      section: 'Flex Grow',
      flexItem: true,
      message: `flex-grow: -1;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexGrow = -1;
      }
    },
    {
      section: 'Flex Grow',
      flexItem: true,
      message: `flex-grow: 10;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexGrow = 10;
      }
    },
    {
      section: 'Flex Shrink',
      flexItem: true,
      message: `flex-shrink: 0;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexShrink = 0;
        this.flexItems[0].flexBasis = '50%';
        this.flexItems[2].flexBasis = '50%';
      }
    },
    {
      section: 'Flex Shrink',
      flexItem: true,
      message: `flex-shrink: 1;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexShrink = 1;
        this.flexItems[0].flexBasis = '50%';
        this.flexItems[2].flexBasis = '50%';
      }
    },
    {
      section: 'Flex Shrink',
      flexItem: true,
      message: `flex-shrink: -1;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexShrink = -1;
        this.flexItems[0].flexBasis = '50%';
        this.flexItems[2].flexBasis = '50%';
      }
    },
    {
      section: 'Flex Shrink',
      flexItem: true,
      message: `flex-shrink: 10;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexShrink = 10;
        this.flexItems[0].flexBasis = '50%';
        this.flexItems[2].flexBasis = '50%';
      }
    },
    {
      section: 'Flex Basis',
      flexItem: true,
      message: `flex-basis: auto;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexBasis = 'auto';
      }
    },
    {
      section: 'Flex Basis',
      flexItem: true,
      message: `flex-basis: 20%;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexBasis = '20%';
      }
    },
    {
      section: 'Flex Basis',
      flexItem: true,
      message: `flex-basis: 10em;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexBasis = '10em';
      }
    },
    {
      section: 'Flex Basis',
      flexItem: true,
      message: `flex-basis: 10000px;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].flexBasis = '10000px';
      }
    },
    {
      section: 'Margin',
      flexItem: true,
      message: `margin-top: auto;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].marginTop = 'auto';
      }
    },
    {
      section: 'Margin',
      flexItem: true,
      message: `margin-right: auto;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].marginRight = 'auto';
      }
    },
    {
      section: 'Margin',
      flexItem: true,
      message: `margin-bottom: auto;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].marginBottom = 'auto';
      }
    },
    {
      section: 'Margin',
      flexItem: true,
      message: `margin-left: auto;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].marginLeft = 'auto';
      }
    },
    {
      section: 'Visibility',
      flexItem: true,
      message: `visibility: visible;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].visibility = 'visible';
      }
    },
    {
      section: 'Visibility',
      flexItem: true,
      message: `visibility: collapse;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].visibility = 'collapse';
      }
    },
    {
      section: 'Visibility',
      flexItem: true,
      message: `visibility: hidden;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].visibility = 'hidden';
      }
    },
    {
      section: 'Visibility',
      flexItem: true,
      message: `display: none;`,
      fn: () => {
        this.resetStyles();
        this.flexItems[1].display = 'none';
      }
    }
  ];
}
